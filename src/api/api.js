import axios from "axios";

const instance = axios.create({
    baseURL: 'https://openlibrary.org'
})
export const projectAPI = {
    getWorks(id) {
        return instance(`/works/${id}.json`)
            .then(res => res.data)
    }
}