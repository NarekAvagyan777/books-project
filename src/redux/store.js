import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import appReducer from "./reducers/appReducer"
import authorsReducer from "./reducers/authorsReducer"
import genresReducer from "./reducers/genresReducer"
import searchReducer from "./reducers/searchReducer"
import worksReducer from "./reducers/worksReducer"

const reducers = combineReducers({
  appPage: appReducer,
  authorsPage: authorsReducer,
  genresPage: genresReducer,
  worksPage: worksReducer,
  searchPage: searchReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

window.state = store

export default store