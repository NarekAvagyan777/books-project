import axios from "axios";

const instance = axios.create({
    baseURL: 'https://openlibrary.org'
})


export const projectAPI = {
    getWork(workId) {
        return instance.get(`/works/${workId}.json`)
            .then(res => res.data)
    },
    getWorksByAuthor(authorId, limit=16) {
        return instance.get(`${authorId}/works.json?limit=${limit}`)
            .then(res => res.data)
    },
    getAuthorData(authorId) {
        return instance.get(`${authorId}.json`)
            .then(res => res.data)
    },
    getWorksBySubject(subject, offset=0, limit=20) {
        return instance.get(`/subjects/${subject}.json?limit=${limit}&offset=${offset * limit}`)
            .then(res => res.data)
    },
    getWorksByAuthorSearch(author, offset=0, limit=20) {
        return instance.get(`/search.json?author=${author}&limit=${limit}&offset=${offset * limit}`)
            .then(res => res.data)
    },
    getWorksBySearch(itemName, offset=0, limit=25) {
        return instance.get(`/search.json?q=${itemName}&limit=${limit}&offset=${offset * limit}`)
            .then(res => res.data)
    }
}