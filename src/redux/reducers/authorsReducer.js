import { projectAPI } from "../../api/api";


const SET_AUTHOR_PHOTO_ID = 'SET_AUTHOR_PHOTO_ID';
const SET_AUTHOR_NAME = 'SET_AUTHOR_NAME';
const SET_AUTHOR_WORKS = 'SET_AUTHOR_WORKS';
const SET_AUTHOR_WORK = 'SET_AUTHOR_WORK';



let initialState = {
    authors: [
        "TOLKIEN", "ROWLING", "SHAKESPEARE", "DICKENS", "AUSTEN", 
        "TOLSTOY", "CHRISTIE", "TWAIN", "MORRISON", "WOOLF", 
        "FITZGERALD", "DOSTOEVSKY", "DOYLE", "MARTIN", "CAROLL"
    ],
    authorName: null,
    authorPhotoId: null,
    authorWorks: null,
    authorWork: null
}

export default function authorsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_AUTHOR_PHOTO_ID:
            return { ...state, authorPhotoId: action.authorPhotoId }
        
        case SET_AUTHOR_NAME: 
            return { ...state, authorName: action.authorName } 

        case SET_AUTHOR_WORKS:
            return { ...state, authorWorks: [...action.payload] }

        case SET_AUTHOR_WORK:
            return { ...state, authorWork: { ...action.payload } }

        default:
            return state
    }
}

export const setAuthorPhotoId = (authorPhotoId) => ({type: SET_AUTHOR_PHOTO_ID, authorPhotoId});
export const setAuthorName = (authorName) => ({type: SET_AUTHOR_NAME, authorName});
export const setAuthorWorks = (payload) => ({type: SET_AUTHOR_WORKS, payload});
export const setAuthorWork = (payload) => ({type: SET_AUTHOR_WORK, payload});



export const getAuthorData = (id) => (dispatch) => {
    projectAPI.getWork(`OL${id}W`)
        .then(data => {
            let workData = {
                coverId: data.covers && data.covers[0],
                title: data.title,
                author: data.authors[0].author.key,
                key: +data.key.match(/\d/g).join(''),
                description: data.description?.value
            }

            dispatch(setAuthorWork(workData));

            projectAPI.getAuthorData(data.authors[0].author.key)
                .then(data => {
                    dispatch(setAuthorName(data.name))

                    if(data.photos) {
                        dispatch(setAuthorPhotoId(data.photos[0]))
                    } else {
                        dispatch(setAuthorPhotoId(null))
                    }
                })

        })
}


export const getWorksByAuthorCreator = (authorId) => (dispatch) => {
    let arr = [];
    let worksArray = [];

    projectAPI.getWorksByAuthor(authorId)
        .then(data => data.entries)
        .then(entries => {
            entries.forEach(el => {
                arr.push(projectAPI.getWork(`OL${el.key.match(/\d/g).join('')}W`))
            })
        })
        .then(res => {
            let promise = Promise.allSettled(arr);
            promise.then(res => {
                res.forEach((el) => {
                    let workData = {
                        coverId: el.value.covers && el.value.covers[0],
                        title: el.value.title,
                        author: el.value.authors[0].author.key,
                        key: +el.value.key.match(/\d/g).join(''),
                        description: el.value.description?.value
                    }

                    worksArray.push(workData)
                })

                dispatch(setAuthorWorks(worksArray));
            })
        })
}