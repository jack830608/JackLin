import {createStore} from 'redux';
import {checkSbot} from '../action';



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


export const mapStateToProps = (state) => {
    return state;
};

export const mapDispatchToProps = (dispatch) => {
    return {
        checkSbotAction: (payload) => dispatch(checkSbot(payload)),
    };
};