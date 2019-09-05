export const CreateLotteryEventDTO = {
    eventName: '',
    deadlineTime: '',
    maxParticipant: '',
    drawTypes: ['',],
    prizes: [{
        UUID: '',
        title: '',
        memo: '',
        winnerNum: 0
    }],
    targetBlock: {
        blockType: '',
        hash: '',
        timestamp: 0,
        height: 0,
    }
};
