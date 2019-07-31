import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import {connect} from "react-redux";

import {tryAddBitcoinBlockInfo, tryAddBitcoinPriceInfo} from "action/bitcoin"

class Dashboard extends React.Component {

    render() {
        const {classes, currentPrice, recentBlocks, tryBitcoinPriceData, tryBitcoinBlockData} = this.props;
        return (
            <div>
                <h1>{currentPrice}</h1>
                <button onClick={() => tryBitcoinPriceData()}> price !</button>
                <ul>
                {recentBlocks.map(blockData =>
                    <li key={blockData.hash}>{blockData.hash}</li>
                )}
                </ul>
                <button onClick={() => tryBitcoinBlockData(0)}> block!</button>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentPrice: state.bitcoinInfoList.currentPrice,
        recentBlocks: state.bitcoinInfoList.recentBlocks
    }
};

const mapDispatchToProps = {
    tryBitcoinPriceData: tryAddBitcoinPriceInfo,
    tryBitcoinBlockData: tryAddBitcoinBlockInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dashboardStyle)(Dashboard));
