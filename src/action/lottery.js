// action
import {addMessage, endLoading, requestFail, startLoading} from "./common";
import {hist} from "../index";

export const CREATE_LOTTERY_EVENT = 'CREATE_LOTTERY_EVENT';
export const REFRESH_LOTTERY_EVENT = 'REFRESH_LOTTERY_EVENT';
export const PARTICIPATE_LOTTERY_SUCCESS = 'PARTICIPATE_LOTTERY_SUCCESS';
export const GET_OR_UPDATE_EVENT_SUCCESS = 'GET_OR_UPDATE_EVENT_SUCCESS';

export const API_SERVER_BASE_URL = 'http://127.0.0.1:3000';

// action creators
export function createLotteryEvent(lottery) {
    return {
        type: CREATE_LOTTERY_EVENT, payload: lottery
    };
}

export function refreshLotteryEvent(lotteries) {
    return {
        type: REFRESH_LOTTERY_EVENT, payload: lotteries
    };
}

export function participateSuccess(lottery) {
    return {
        type: PARTICIPATE_LOTTERY_SUCCESS, payload: lottery
    }
}

export function getOrUpdateEventSuccess(lottery) {
    return {
        type: GET_OR_UPDATE_EVENT_SUCCESS, payload: lottery
    }
}

// redux-thunk method
export function tryCreateLottery(createLotteryDTO) {
    return (dispatch) => {
        dispatch(startLoading());
        return fetch(API_SERVER_BASE_URL + '/lottery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createLotteryDTO)
        }).then(res => {
            if (!res.ok) {
                throw Error(res.body.toString())
            }
            return res;
        }).then(res => res.json().then(data => {
                dispatch(createLotteryEvent(data));
                hist.push('/main/lottery/' + data.UUID);
            })
        )
            .catch(err => {
                dispatch(requestFail(err, false));
                dispatch(addMessage(err.toString(),'error'))
            }).finally(() => {
                dispatch(endLoading())
            })
    }
}

export function tryRefreshLotteries(startTimestamp, endTimestamp) {
    return (dispatch) => {
        dispatch(startLoading());
        return fetch(API_SERVER_BASE_URL + '/lottery?startTimestamp=' + startTimestamp.toString() +
            '&endTimestamp=' + endTimestamp.toString())
            .then(res => {
                if (!res.ok) {
                    throw Error(res.body.toString())
                }
                return res;
            })
            .then(res => res.json().then(data => {
                    dispatch(refreshLotteryEvent(data))
                }).catch(err => {
                    dispatch(requestFail(err, false))
                })
            ).catch(err => {
                dispatch(requestFail(err, false));
                dispatch(addMessage(err.toString(),'error'))
            }).finally(() => {
                dispatch(endLoading())
            })
    }
}

export function tryParticipateLottery(participateDTO) {
    return (dispatch) => {
        dispatch(startLoading());
        return fetch(API_SERVER_BASE_URL + '/lottery/' + participateDTO.eventUUID + '/participant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(participateDTO)
        }).then(res => {
            if (!res.ok) {
                throw res
            }
            return res;
        }).then(res => res.json().then(data => {
            dispatch(participateSuccess(data))
        })).catch(res => {
            res.json().then(body=>{
                dispatch(requestFail(body, false));
                dispatch(addMessage(body.message,'error'))
            })

        })
            .finally(() => dispatch(endLoading()))

    }
}


export function tryGetLottery(UUID) {
    return (dispatch) => {
        dispatch(startLoading());
        return fetch(API_SERVER_BASE_URL + '/lottery/' + UUID)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.body.toString())
                }
                return res;
            })
            .then(res => res.json().then(data => {
                dispatch(getOrUpdateEventSuccess(data))
            }))
            .catch(err => {
                dispatch(requestFail(err, false));
                dispatch(addMessage(err.toString(),'error'))
            })
            .finally(() => dispatch(endLoading()))

    }
}

export function tryDrawLottery(drawDTO) {
    return (dispatch) => {
        dispatch(startLoading());
        return fetch(API_SERVER_BASE_URL + '/lottery/' + drawDTO.eventUUID + '/draw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(drawDTO)
        }).then(res => {
            if (!res.ok) {
                throw Error(res.body.toString())
            }
            return res;
        })
            .then(res => res.json().then(data => {
                dispatch(getOrUpdateEventSuccess(data))
            }))
            .catch(err => {
                dispatch(requestFail(err, false));
                dispatch(addMessage(err.toString(),'error'))
            })
            .finally(() => dispatch(endLoading()))

    }
}