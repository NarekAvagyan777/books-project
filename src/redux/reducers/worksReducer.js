import { projectAPI } from "../../api/api"
import { setIsFetching } from "./appReducer"

const SET_WORKS = "SET_WORKS"

let initialState = {
  works: [],
}

export default function worksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORKS:
      return { ...state, works: [...action.payload] }

    default:
      return state
  }
}

export const setWorks = (payload) => ({ type: SET_WORKS, payload })

export const getWorksCreator = () => (dispatch) => {
  dispatch(setIsFetching(true))

  let arr = []
  for (let i = 20400; i <= 20472; i += 3) {
    arr.push(projectAPI.getWork(`OL${i}W`))
  }

  let promise = Promise.allSettled(arr)
  promise.then((res) => {
    let payload = res.map((el) => {
      return {
        coverId: el.value?.covers && el.value.covers[0],
        title: el.value.title,
        key: +el.value.key.match(/\d/g).join(""),
      }
    })

    dispatch(setWorks(payload))
    dispatch(setIsFetching(false))
  })
}
