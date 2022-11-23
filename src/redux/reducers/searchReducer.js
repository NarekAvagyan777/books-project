import { projectAPI } from "../../api/api"
import { setIsFetching } from "./appReducer"

const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"

let initialState = {
  searchResults: null,
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: [...action.payload] }

    default:
      return state
  }
}

export const setSearchResults = (payload) => ({ type: SET_SEARCH_RESULTS, payload })

export const getWorksBySearchCreator = (itemName, page) => (dispatch) => {
  dispatch(setIsFetching(true))

  projectAPI.getWorksBySearch(itemName, page-1)
    .then((data) => {
      console.log(data);
      let payload = data.docs.map((el) => {
        return {
          coverId: el.cover_i ? el.cover_i : undefined,
          title: el.title,
          key: +el.key.match(/\d/g).join(""),
        }
      })

      dispatch(setSearchResults(payload))
      dispatch(setIsFetching(false))
    })
}
