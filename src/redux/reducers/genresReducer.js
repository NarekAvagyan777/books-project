import { projectAPI } from "../../api/api"
import { setIsFetching } from "./appReducer"

const SET_GENRE_WORKS = "SET_GENRE_WORKS"

let initialState = {
  genres: [
    "fiction",
    "horror",
    "fantasy",
    "drama",
    "classics",
    "detective",
    "science",
    "movies",
    "dystopian",
    "action",
    "religious",
    "adventure",
    "historical",
    "history",
    "thriller",
  ],
  genreWorks: null,
}

export default function genresReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRE_WORKS:
      return { ...state, genreWorks: [...action.payload] }
    default:
      return state
  }
}

export const setGenreWorks = (payload) => ({ type: SET_GENRE_WORKS, payload })

export const getWorksBySubjectCreator = (subject, offset) => (dispatch) => {
  dispatch(setIsFetching(true))
  projectAPI.getWorksBySubject(subject, offset-1)
    .then((data) => {
      let payload = data.works.map((el) => {
        return {
          coverId: el.cover_id ? el.cover_id : undefined,
          title: el.title,
          key: +el.key.match(/\d/g).join("")
        }
      })

      dispatch(setGenreWorks(payload))
      dispatch(setIsFetching(false))
    })
}