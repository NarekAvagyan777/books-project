const SET_GENRE = 'SET_GENRE';

let initialState = {
    genres: [
        "fiction", "horror", "fantasy", "drama", "classics", 
        "detective", "science", "movies", "dystopian", "action", 
        "religious", "adventure", "historical", "history", "thriller"
    ],
    genre: null
}

export default function genresReducer(state = initialState, action) {
    switch(action.type) {
        case SET_GENRE:
            return {...state, genre: action.genre}

        default:
            return state
    }
}


export const setGenre = (genre) => ({type: SET_GENRE, genre});