import {
    REFRESH_LOTTERY_EVENT,
    CREATE_LOTTERY_EVENT,
    PARTICIPATE_LOTTERY_SUCCESS,
    GET_OR_UPDATE_EVENT_SUCCESS
} from "../action/lottery";


let initialState = {lotteries: []};
const newLottery = payload => {
    return payload
};


const lotteryList = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LOTTERY_EVENT:
            return {
                ...state, lotteries: [
                    ...state.lotteries,
                    newLottery(action.payload)
                ]
            };
        case REFRESH_LOTTERY_EVENT:
            return {
                ...state,
                lotteries:
                    action.payload.map((lottery) => {
                        return newLottery(lottery)
                    })
            };
        case PARTICIPATE_LOTTERY_SUCCESS:
            return {
                ...state,
                lotteries: state.lotteries.map(lottery => {
                    if (action.payload.UUID === lottery.UUID) {
                        return newLottery(action.payload);
                    } else {
                        return lottery;
                    }
                })
            };
        case GET_OR_UPDATE_EVENT_SUCCESS:
            let pastLottery = state.lotteries.find(lottery => lottery.UUID === action.payload.UUID);
            if (pastLottery === undefined) {
                state.lotteries = [...state.lotteries, newLottery(action.payload)]
            } else {
                state.lotteries = state.lotteries.map(lottery => {
                    if (action.payload.UUID === lottery.UUID) {
                        return newLottery(action.payload);
                    } else {
                        return lottery;
                    }
                })
            }
            return {
                lotteries: state.lotteries
            };
        default:
            return state;
    }
};

export default lotteryList