import { projectAPI } from "../../api/api"
import { setIsFetching } from "./appReducer"

const SET_AUTHOR_PHOTO_ID = "SET_AUTHOR_PHOTO_ID"
const SET_AUTHOR_NAME = "SET_AUTHOR_NAME"
const SET_AUTHOR_WORKS = "SET_AUTHOR_WORKS"
const SET_AUTHOR_SEARCH_WORKS = "SET_AUTHOR_SEARCH_WORKS"
const SET_AUTHOR_WORK = "SET_AUTHOR_WORK"

let initialState = {
  authors: [
    "tolkien",
    "rowling",
    "shakespeare",
    "dickens",
    "austen",
    "tolstoy",
    "christie",
    "twain",
    "morrison",
    "woolf",
    "fitzgerald",
    "dostoevsky",
    "doyle",
    "martin",
    "caroll",
  ],
  authorName: null,
  authorPhotoId: null,
  authorWorks: null,
  authorSearchWorks: null,
  authorWork: null,
}

export default function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHOR_PHOTO_ID:
      return { ...state, authorPhotoId: action.authorPhotoId }

    case SET_AUTHOR_NAME:
      return { ...state, authorName: action.authorName }

    case SET_AUTHOR_WORKS:
      return { ...state, authorWorks: [...action.payload] }

    case SET_AUTHOR_SEARCH_WORKS:
      return { ...state, authorSearchWorks: [...action.payload] }

    case SET_AUTHOR_WORK:
      return { ...state, authorWork: { ...action.payload } }

    default:
      return state
  }
}

export const setAuthorPhotoId = (authorPhotoId) => ({ type: SET_AUTHOR_PHOTO_ID, authorPhotoId })
export const setAuthorName = (authorName) => ({ type: SET_AUTHOR_NAME, authorName })
export const setAuthorWorks = (payload) => ({ type: SET_AUTHOR_WORKS, payload })
export const setAuthorSearchWorks = (payload) => ({ type: SET_AUTHOR_SEARCH_WORKS, payload })
export const setAuthorWork = (payload) => ({ type: SET_AUTHOR_WORK, payload })

export const getAuthorData = (id) => (dispatch) => {
  projectAPI.getWork(`OL${id}W`).then((data) => {
    let workData = {
      coverId: data.covers && data.covers[0],
      title: data.title,
      author: data.authors[0].author.key,
      key: +data.key.match(/\d/g).join(""),
      description: data.description?.value,
    }

    dispatch(setAuthorWork(workData))

    projectAPI.getAuthorData(data.authors[0].author.key).then((data) => {
      dispatch(setAuthorName(data.name))

      if (data.photos) {
        dispatch(setAuthorPhotoId(data.photos[0]))
      } else {
        dispatch(setAuthorPhotoId(null))
      }
    })
  })
}


export const getWorksByAuthorCreator = (authorId) => (dispatch) => {
  dispatch(setIsFetching(true))

  projectAPI.getWorksByAuthor(authorId)
    .then((data) => {
      let arr = data.entries.map((el) => {
        return projectAPI.getWork(`OL${el.key.match(/\d/g).join("")}W`)
      })

      let promise = Promise.allSettled(arr)

      promise.then((res) => {
        let worksArray = res.map((el) => {
          return {
              coverId: el.value.covers && el.value.covers[0],
              title: el.value.title,
              author: el.value.authors[0].author.key,
              key: +el.value.key.match(/\d/g).join(""),
              description: el.value.description?.value
          }
        })

        dispatch(setAuthorWorks(worksArray))
        dispatch(setIsFetching(false))
      })
    })
}




export const getWorksByAuthorSearchCreator = (authorName, offset) => (dispatch) => {
  dispatch(setIsFetching(true))

  projectAPI.getWorksByAuthorSearch(authorName, offset-1)
    .then((data) => {
      let payload = data.docs.map((el) => {
        return {
          coverId: el.cover_i ? el.cover_i : undefined,
          title: el.title,
          key: +el.key.match(/\d/g).join("")
        }
      })

      dispatch(setAuthorSearchWorks(payload))
      dispatch(setIsFetching(false))  
    })
}
