import { projectAPI } from "../../api/api";

const SET_THEME = 'SET_THEME';
const SET_WORK = 'SET_WORK';
const SET_GENRE = 'SET_GENRE';
const SET_WORK_ID = 'SET_WORK_ID';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    genres: [
        "fiction", "horror", "fantasy", "drama", "classics", 
        "detective", "science", "movies", "dystopian", "action", 
        "religious", "adventure", "historical", "history", "thriller"
    ],
    authors: [
        "TOLKIEN", "ROWLING", "SHAKESPEARE", "DICKENS", "AUSTEN", 
        "TOLSTOY", "CHRISTIE", "TWAIN", "MORRISON", "WOOLF", 
        "FITZGERALD", "DOSTOEVSKY", "DOYLE", "MARTIN", "CAROLL"
    ],
    isFetching: false,
    theme: false,
    works: [],
    genre: '',
    workId: ''
}

export default function projectReducer(state = initialState, action) {
    switch(action.type) {
        case SET_THEME:
            return {...state, theme: action.theme}
        
        case SET_WORK:
            return {...state, works: [...state.works, {...action.payload}]}

        case SET_GENRE:
            return {...state, genre: action.genre}

        case SET_WORK_ID:
            return {...state, workId: +action.workId}

        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}



export const setTheme = (theme) => {
    debugger;
    return {type: SET_THEME, theme}
};
export const setWork = (payload) => ({type: SET_WORK, payload});
export const setGenre = (genre) => ({type: SET_GENRE, genre});
export const setWorkId = (workId) => ({type: SET_WORK_ID, workId});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});


export const getWorksCreator = (workId) => (dispatch) => {
    dispatch(setIsFetching(true));

    let arr = [];
    for(let i = 12021; i <= 12045; i++) {
        arr.push(projectAPI.getWork(`OL${i}W`))
    }

    let promise = Promise.allSettled(arr)
    promise.then(res => {
        res.forEach((el) => {
            if(el.value.covers) {
                let workData = {
                    coverId: el.value.covers[0],
                    title: el.value.title, 
                    author: el.value.authors[0].author.key, 
                    key: el.value.key.split('/')[el.value.key.split('/').length-1].slice(2, 7)
                };

                dispatch(setWork(workData));
            }
        })
    })
    .then(res => dispatch(setIsFetching(false)))
}