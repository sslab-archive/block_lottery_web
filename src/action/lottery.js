// action
export const CREATE_LOTTERY_EVENT = 'CREATE_LOTTERY_EVENT';


// action creater
export function createLotteryEvent(payload) {
    return {
        type: CREATE_LOTTERY_EVENT, payload: payload
    };
}
