export const REQUEST_FAIL = 'REQUEST_FAIL';
export const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';
export const STATUS_LOADING = 'STATUS_LOADING';
export const STATUS_FINISH = 'STATUS_FINISH';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';


export function requestFail(err, debugOnly = true) {
    return {
        type: REQUEST_FAIL, debugOnly: debugOnly, payload: err
    }
}

export function startLoading() {
    return {
        type: CHANGE_LOADING_STATUS, payload: STATUS_LOADING
    };
}

export function endLoading() {
    return {
        type: CHANGE_LOADING_STATUS, payload: STATUS_FINISH
    };
}

export function addMessage(msg, type) {
    return {
        type: ADD_MESSAGE, payload: {msg: msg, type: type}
    }
}

export function closeMessage(msg) {
    return {
        type: CLOSE_MESSAGE, payload: msg
    }
}
