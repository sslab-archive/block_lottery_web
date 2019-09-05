import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import {connect} from "react-redux";

import {tryAddBitcoinBlockInfo, tryAddBitcoinPriceInfo} from "action/bitcoin"
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import Table from "components/Table/Table";
import SnackbarContent from "components/Snackbar/SnackbarContent";

class Dashboard extends React.Component {

    render() {
        const {classes, currentPrice, recentBlocks, tryBitcoinPriceData, tryBitcoinBlockData} = this.props;
        return (
            <div>
                <h1>{currentPrice}</h1>
                <button onClick={() => tryBitcoinPriceData()}> price !</button>
                <ul>
                {recentBlocks.map(blockData =>
                    <li key={blockData.hash}>{blockData.hash}, height : {blockData.height}, date : {timestampToString(blockData.time)}</li>
                )}
                </ul>
                <button onClick={() => tryBitcoinBlockData(0)}> block!</button>
                <GridContainer>
                    <GridItem md={2}/>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="warning">
                                <h4 className={classes.cardTitleWhite}>최근 등록된 이벤트</h4>
                                <p className={classes.cardCategoryWhite}>
                                    이벤트 목록
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={["ID", "이벤트명", "생성 시간", "참여자/최대수"]}
                                    tableData={[
                                        ["4", "eeee", "2019-08-07 13:26", "0/무제한"],
                                        ["3", "10명만", "2019-08-07 13:25", "0/10"],
                                        ["2", "이벤트2222", "2019-08-07 13:24", "3/무제한"],
                                        ["1", "테스트 이벤트", "2019-08-07 13:22", "1/무제한"],
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}/>
                    <GridItem xs={1}/>
                    <GridItem>
                        <Card>
                            <SnackbarContent message={"This is a plain notification"} />
                            <h1> 이 g </h1>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

function timestampToString(timestamp){
    let d = new Date(timestamp*1000);
    return d.toLocaleDateString()+ d.toLocaleTimeString()
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
