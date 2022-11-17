import { projectAPI } from "../../api/api";
import { setIsFetching } from "./appReducer";


const SET_WORK = 'SET_WORK';



let initialState = {
    works: [],
}

export default function worksReducer(state = initialState, action) {
    switch(action.type) {
        case SET_WORK:
            return {...state, works: [...state.works, {...action.payload}]}

        default:
            return state
    }
}


export const setWork = (payload) => ({type: SET_WORK, payload});


export const getWorksCreator = () => (dispatch) => {
    dispatch(setIsFetching(true));

    let arr = [];
    for(let i = 20400; i <= 20472; i+=3) {
        arr.push(projectAPI.getWork(`OL${i}W`))
    }

    let promise = Promise.allSettled(arr)
    promise.then(res => {
        res.forEach((el) => {
            console.log(el);
            let workData = {
                coverId: el.value?.covers && el.value.covers[0],
                title: el.value.title,
                author: el.value.authors[0].author.key,
                key: +el.value.key.match(/\d/g).join(''),
                description: el.value.description?.value
            }
            dispatch(setWork(workData))
        })
    })
    .then(res => dispatch(setIsFetching(false)))
}