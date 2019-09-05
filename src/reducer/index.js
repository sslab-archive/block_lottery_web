import {combineReducers} from "redux";
import bitcoinInfoList from "./bitcoin"
import lotteryList from "./lottery"
import commonStatus from "./common";

export default combineReducers({
    bitcoinInfoList,
    lotteryList,
    commonStatus,
});