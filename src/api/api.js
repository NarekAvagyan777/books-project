import axios from "axios";

const instance = axios.create({
    baseURL: 'https://openlibrary.org'
})
export const projectAPI = {
    getWork(workId) {
        return instance.get(`/works/${workId}.json`)
            .then(res => res.data)
    },
    getWorksByAuthor(authorId) {
        return instance.get(`/authors/${authorId}/works.json`)
    }
}