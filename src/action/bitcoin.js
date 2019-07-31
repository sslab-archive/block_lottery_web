// action type(명령어)
export const ADD_BITCOIN_PRICE_INFO = 'ADD_BITCOIN_PRICE_INFO';
export const TRY_ADD_BITCOIN_PRICE_INFO = 'TRY_ADD_BITCOIN_PRICE_INFO';
export const ADD_BITCOIN_BLOCK_INFO = 'ADD_BITCOIN_BLOCK_INFO';
export const TRY_ADD_BITCOIN_BLOCK_INFO = 'TRY_ADD_BITCOIN_BLOCK_INFO';
export const REQUEST_FAIL = 'REQUEST_FAIL';

// action creators

export function addBitcoinPriceInfo(data) {
    return {
        type: ADD_BITCOIN_PRICE_INFO, payload: data
    }
}

export function addBitcoinBlockInfo(data) {
    console.log(data)
    return {
        type: ADD_BITCOIN_BLOCK_INFO, payload: data
    }
}

export function requestFail(err, debugOnly = true) {
    return {
        type: REQUEST_FAIL, debugOnly: debugOnly, payload: err
    }
}

// redux-thunk method
export function tryAddBitcoinBlockInfo(currentHeight) {
    return (dispatch) => {
        let currentTimeMillis = new Date().getTime();
        return fetch("https://blockchain.info/blocks/" + currentTimeMillis + "?format=json&cors=true").then(
            res => res.json().then(data => {
                console.log("HHHH");

                if (data.blocks[0] != null &&
                    data.blocks[0].height.toString() !== currentHeight.toString() &&
                    data.blocks[0].main_chain === true) {
                    console.log("HHHH2");
                    dispatch(addBitcoinBlockInfo(data.blocks[0]))
                }
            }).catch(err => {
                dispatch(requestFail(err,false))
            })
        )
    }
}

export function tryAddBitcoinPriceInfo() {
    return (dispatch) => {
        return fetch("https://api.bithumb.com/public/ticker/BTC").then(
            res => res.json().then(data => {
                if (data.status === "0000") {
                    dispatch(addBitcoinPriceInfo(data.data["sell_price"]))
                } else {
                    dispatch(requestFail("bithumb api status is not 0000",false))
                }
            }).catch(err => {
                dispatch(requestFail(err,false))
            })
        )
    }
}