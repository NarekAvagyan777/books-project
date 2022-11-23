const SET_THEME = "SET_THEME"
const SET_IS_FETCHING = "SET_IS_FETCHING"

let initialState = {
  isFetching: false,
  theme: false,
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.theme }

    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    default:
      return state
  }
}

export const setTheme = (theme) => ({ type: SET_THEME, theme })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })