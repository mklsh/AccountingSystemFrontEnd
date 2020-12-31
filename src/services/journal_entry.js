import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/journal-entries'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newJournalEntry =>{
    const request = axios.post(baseUrl,newJournalEntry)
    return request.then(response => response.data)
}

const update = (id, newJournalEntry) => {
    const request =  axios.put(`${baseUrl}/${id}`,newJournalEntry)
    return request.then(response => response.data)
}

const remove = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update,remove}
