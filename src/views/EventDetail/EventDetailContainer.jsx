import React from "react";
import {connect} from "react-redux";
import EventDetailPresentation from "../../components/Event/EventDetail";
import {tryDrawLottery, tryGetLottery, tryParticipateLottery} from "../../action/lottery";
import Grow from '@material-ui/core/Grow';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

class EventDetailContainer extends React.Component {


    componentDidMount() {
        const {match, lotteries, tryGetLottery} = this.props;
        const lottery = lotteries.find(event => {
            return event.UUID === match.params.UUID;
        });
        if (lottery === undefined) {
            tryGetLottery(match.params.UUID);
        }
    }

    render() {
        const {classes, isLoading, match, tryParticipateLottery, tryDrawLottery, lotteries} = this.props;

        const onParticipateClick = function (eventUUID, data) {
            tryParticipateLottery({eventUUID: eventUUID, participantUUID: data.email, participantInfo: data.name})
        };

        const onDrawClick = function (eventUUID) {
            tryDrawLottery({eventUUID: eventUUID})
        };

        const event = lotteries.find(event => event.UUID === match.params.UUID);
        return <div>
            {isLoading ? <CircularProgress
                style={{position: "absolute", top: "50%", left: "50%", width: "100px", height: "100px", zIndex: 10}}
            /> : <div/>}
            {event ? <Grow in={event !== undefined} timeout={1000}>
                    <EventDetailPresentation style={{opacity: isLoading ? 0.5 : 1}}
                                             eventName={event.eventName}
                                             eventUUID={event.UUID}
                                             contents={event.contents}
                                             createAt={timestampToString(event.eventCreateTx.timestamp)}
                                             deadlineTime={timestampToString(event.deadlineTime)}
                                             currentParticipant={event.participants ? event.participants.length : 0}
                                             maxParticipant={event.maxParticipant}
                                             prizes={event.prizes}
                                             isOpen={Math.floor(Date.now() / 1000) < event.deadlineTime}
                                             isDrawn={event.status === "DRAWN"}
                                             onParticipateClick={onParticipateClick}
                                             onDrawClick={onDrawClick}

                    />
                </Grow>
                : <br/>
            }

        </div>
    }
}

function timestampToString(timestamp) {
    let d = new Date(timestamp * 1000);
    return d.toLocaleDateString() + d.toLocaleTimeString()
}

const mapStateToProps = (state) => {
    return {
        lotteries: state.lotteryList.lotteries,
        isLoading: state.commonStatus.isLoading
    }
};

const mapDispatchToProps = {
    tryParticipateLottery: tryParticipateLottery,
    tryGetLottery: tryGetLottery,
    tryDrawLottery: tryDrawLottery,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailContainer);