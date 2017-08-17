export default function(state = null,action){
    switch(action.type){
        case 'BOOK_SELECTED':
            // state.title = book.title
            //return state
            return action.payload;
    }
    return state;
}