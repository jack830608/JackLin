import { createStore } from 'redux';



const initState = {
    sbot: true,
    findDistance: (section) => {
        if (section && document.getElementById(section)) {
            window.scrollTo({ 'behavior': 'smooth', 'top': document.getElementById(section).offsetTop })
        }
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHECK_SBOT':
            return {
                ...state,
                sbot: action.payload
            }
        default:
            return state;
    }
}
export const store = createStore(reducer);