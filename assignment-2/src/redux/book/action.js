import { BOOK, DELETEBOOK } from "../book/actionType";

export const book = (value) => {
    return {
        type: BOOK,
        payload: value
    }
}

export const deleteBook = (id) => {
    return {
        type: DELETEBOOK,
        id: id
    }
}