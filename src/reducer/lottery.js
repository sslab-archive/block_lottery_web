import * as lotteryAction from 'action/lottery';
const {CREATE_LOTTERY_EVENT} = lotteryAction;

const lottery = (state, action) => {
    switch (action.type) {
        case CREATE_LOTTERY_EVENT:
            return {
                completed: false
            };
        default:
            return state;
    }
};


const lotteryList = (state = [], action) => {
    switch (action.type) {
        case CREATE_LOTTERY_EVENT:
            return [
                ...state, lottery(undefined, action)
            ];
        default:
            return state;
    }
};

export default lotteryList