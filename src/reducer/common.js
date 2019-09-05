import {ADD_MESSAGE, CHANGE_LOADING_STATUS, CLOSE_MESSAGE, REQUEST_FAIL, STATUS_LOADING} from "../action/common";
function newMessage(payload) {
    return {
        msg:payload.msg,
        type:payload.type,
    }
}

const commonStatus = (state = {isLoading: false, msgList: []}, action) => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS:
            if (action.payload === STATUS_LOADING) {
                return {
                    ...state,
                    isLoading: true,
                }
            } else {
                return {
                    ...state,
                    isLoading: false,
                }
            }
        case REQUEST_FAIL:
            console.log('request fail...');
            console.log(action.payload);
            return state;
        case ADD_MESSAGE:
            return{
                ...state,
                msgList: [
                    ...state.msgList,
                    newMessage(action.payload)
                ]
            };
        case CLOSE_MESSAGE:
            return{
                ...state,
                msgList:[
                    ...state.msgList.filter(msg=>msg.msg!==action.payload)
                ]
            };

        default:
            return state;
    }
};

export default commonStatus