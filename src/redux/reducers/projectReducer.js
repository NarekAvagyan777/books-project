import { projectAPI } from "../../api/api";

const SET_THEME = 'SET_THEME';
const SET_WORK_COVER = 'SET_WORK_COVER';

let initialState = {
    theme: 'light',
    genres: [
            "FICTION", "HORROR", "FANTASY", "DRAMA", "CLASSICS", 
            "DETECTIVE", "SCIENCE", "MOVIES", "DYSTOPIAN", "ACTION", 
            "RELIGIOUS", "ADVENTURE", "HISTORICAL", "HISTORY", "THRILLER", 
            "ROMANCE", "CHILDREN", "AUTOBIOGRAPHY", "BIOGRAPHY", "COOKBOOK", 
            "ART", "GUIDE", "TECHNOLOGY", "POETRY"
    ],
    authors: [
            "TOLKIEN", "ROWLING", "SHAKESPEARE", "DICKENS", "AUSTEN", 
            "TOLSTOY", "CHRISTIE", "TWAIN", "MORRISON", "WOOLF", 
            "FITZGERALD", "DOSTOEVSKY", "DOYLE", "MARTIN", 
            "CAROLL", "KAFKA", "ELLISON", "FLEMING"
    ],
    covers: []
}

export default function projectReducer(state = initialState, action) {
    switch(action.type) {
        case SET_THEME:
            return {...state, theme: action.theme}
        
        case SET_WORK_COVER:
            return {...state, covers: [...state.covers, {...action.payload}]}

        default:
            return state
    }
}

export const setTheme = (theme) => ({type: SET_THEME, theme});

// export const setWorkCover = (coverId) => ({type: SET_WORK_COVER, coverId})

export const setWorkCover = (payload) => ({type: SET_WORK_COVER, payload})

export const getWorksCreator = (numberId) => (dispatch) => {
    let string = `OL${numberId}W`
    projectAPI.getWorks(string)
        .then(data => {
            if(data.covers) {
                console.log(data)
                dispatch(setWorkCover({coverId: data.covers[0], title: data.title}))
            }
        })
}