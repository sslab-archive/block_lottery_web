// action type(명령어)

import {endLoading, requestFail, startLoading} from "./common";

export const ADD_BITCOIN_PRICE_INFO = 'ADD_BITCOIN_PRICE_INFO';
export const TRY_ADD_BITCOIN_PRICE_INFO = 'TRY_ADD_BITCOIN_PRICE_INFO';
export const ADD_BITCOIN_BLOCK_INFO = 'ADD_BITCOIN_BLOCK_INFO';
export const TRY_ADD_BITCOIN_BLOCK_INFO = 'TRY_ADD_BITCOIN_BLOCK_INFO';


// action creators

export function addBitcoinPriceInfo(data) {
    return {
        type: ADD_BITCOIN_PRICE_INFO, payload: data
    }
}

export function addBitcoinBlockInfo(data) {
    return {
        type: ADD_BITCOIN_BLOCK_INFO, payload: data
    }
}


// redux-thunk method
export function tryAddBitcoinBlockInfo(currentHeight) {
    return (dispatch) => {
        let currentTimeMillis = new Date().getTime();
        dispatch(startLoading());
        return fetch("https://blockchain.info/blocks/" + currentTimeMillis + "?format=json&cors=true").then(
            res => res.json().then(data => {
                if (currentHeight === 0){
                    data.blocks.reverse();
                    data.blocks.every((block,idx)=>{
                        if (idx>10) return false;
                        setTimeout(function () {
                            dispatch(addBitcoinBlockInfo(block));
                        },1000 * idx);
                        return true;
                    })
                }else if (data.blocks[0] != null &&
                    data.blocks[0].height.toString() !== currentHeight.toString() &&
                    data.blocks[0].main_chain === true) {
                    dispatch(addBitcoinBlockInfo(data.blocks[0]))
                }
            }).catch(err => {
                dispatch(requestFail(err,false))
            }).finally(()=>{
                dispatch(endLoading())
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
            }).finally(()=>{
                dispatch(endLoading())
            })
        )
    }
}