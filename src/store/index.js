import {createStore} from 'redux';



const initState = {
    sbot: true,
}

const reducer = (state = initState , action) => {
    switch (action.type) {
        case 'CHECK_SBOT' :
            return{
                ...state,
                sbot: action.payload
            }
        default:
            return state;
    }
}
export const store = createStore(reducer);