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
        return instance.get(`${authorId}/works.json`)
            .then(res => res.data)
    },
    getAuthorData(authorId) {
        return instance.get(`${authorId}.json`)
            .then(res => res.data)
    }
}