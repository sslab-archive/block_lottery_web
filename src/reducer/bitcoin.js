import * as bitcoinAction from 'action/bitcoin';

const {ADD_BITCOIN_BLOCK_INFO, ADD_BITCOIN_PRICE_INFO} = bitcoinAction;

let initialState = {currentPrice: 0, recentBlocks: []};
const newBitcoinInfo = payload => {
    return {
        height: payload.height,
        hash: payload.hash,
        time: payload.time,
        main_chain: payload.main_chain,
    }
};


const bitcoinInfoList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BITCOIN_BLOCK_INFO:
            console.log("why not here");
            console.log(action);
            return {
                ...state, recentBlocks: [
                    ...state.recentBlocks,
                    newBitcoinInfo(action.payload),
                ]
            };
        case ADD_BITCOIN_PRICE_INFO:
            return {
                ...state,
                currentPrice: action.payload
            };
        default:
            return state;
    }
};

export default bitcoinInfoList