import axios from "axios";
import Book from "../pages/book/Book";
const BookApis = {};

BookApis.index = async () => {
    const url = 'api/book';
    const res = await axios.get(url).then(response => {
        return response;
    }).catch(error => {
        return error.response
    })

    return res;
}
BookApis.show = async (id) => {
    const url = `api/book/${id}`;
    const res = await axios.get(url).then(response => {
        return response;
    }).catch(error => {
        return error.response
    })

    return res;
}
BookApis.update = async (data,id) => {
    const url = `api/book/${id}`;
    const res = await axios.put(url, data).then(response => {
        return response;
    }).catch(error => {
        return error.response
    })
   
    return res;
}

BookApis.delete = async (id) => {
    const url = `api/book/${id}/delete`;
    const res = await axios.delete(url).then(response => {
        return response;
    }).catch(error => {
        return error.response
    })
    return res;
}
BookApis.save = async (data) => {
    const url = `api/book`;
    const res = await axios.post(url,data).then(response => {
        return response;
    }).catch(error => {
        return error.response
    })
    return res;
}

export default BookApis