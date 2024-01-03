import { BOOK, DELETEBOOK } from "../book/actionType";

const initialState = [
    {
        id:1,
        from: 'Dhaka',
        to: 'Syleth',
        date: "2015-11-11",
        guests: 2,
        ticketClass: 'business-ticket',
    }
];
const bookReducer = (state = initialState , action) => {
const copiedState = [...state];
    const {type,payload} = action;
    switch (type) {
        case BOOK:
            const lastBookId = idGenerator(state);

            // const lastBookId = copiedState[copiedState.length - 1]?.id
            const newBook = { ...payload, id: lastBookId ? (lastBookId + 1) : 1 }
            copiedState.push(newBook)
            return copiedState

        case DELETEBOOK:
            const updatedState = copiedState.filter(item => item.id !== action.id)
            return updatedState

        default:
            return state
    }
}

const idGenerator = (arr)=>{
    const maxId = arr.reduce((maxId, match)=>Math.max(maxId, match.id),-1);
    return maxId + 1
}

export default bookReducer;