import { projectAPI } from "../../api/api";


const SET_AUTHOR_PHOTO_ID = 'SET_AUTHOR_PHOTO_ID';
const SET_AUTHOR_NAME = 'SET_AUTHOR_NAME';



let initialState = {
    authors: [
        "TOLKIEN", "ROWLING", "SHAKESPEARE", "DICKENS", "AUSTEN", 
        "TOLSTOY", "CHRISTIE", "TWAIN", "MORRISON", "WOOLF", 
        "FITZGERALD", "DOSTOEVSKY", "DOYLE", "MARTIN", "CAROLL"
    ],
    authorName: null,
    authorPhotoId: null
}

export default function authorsReducer(state = initialState, action) {

    switch(action.type) {
        case SET_AUTHOR_PHOTO_ID: {
            return { ...state, authorPhotoId: action.authorPhotoId }
        }
        case SET_AUTHOR_NAME: {
            return { ...state, authorName: action.authorName }
        }
        default:
            return state
    }
}

export const setAuthorPhotoId = (authorPhotoId) => ({type: SET_AUTHOR_PHOTO_ID, authorPhotoId});
export const setAuthorName = (authorName) => ({type: SET_AUTHOR_NAME, authorName});


export const getAuthorData = (author) => (dispatch) => {
    projectAPI.getAuthorData(author)
        .then(data => {
            dispatch(setAuthorName(data.name))

            if(data.photos) {
                dispatch(setAuthorPhotoId(data.photos[0]))
            } else {
                dispatch(setAuthorPhotoId(null))
            }
        })
}