const SET_THEME = 'SET_THEME';

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
    ]
}

export default function projectReducer(state = initialState, action) {
    switch(action.type) {
        case SET_THEME:
            return {...state, theme: action.theme}
        
        default:
            return state
    }
}

export const setTheme = (theme) => ({type: SET_THEME, theme});