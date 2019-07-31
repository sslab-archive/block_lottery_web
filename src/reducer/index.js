import {combineReducers} from "redux";
import bitcoinInfoList from "./bitcoin"
import lotteryList from "./lottery"

export default combineReducers({
    bitcoinInfoList,
    lotteryList,
});