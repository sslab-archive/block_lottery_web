import React from "react";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent/SnackbarContent";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton/IconButton";
import { amber, green } from '@material-ui/core/colors';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles} from "@material-ui/core";

export default function (props) {
    const {msgList, onClose} = props;
    const variantIcon = {
        success: CheckCircleIcon,
        warning: WarningIcon,
        error: ErrorIcon,
        info: InfoIcon,
    };

    const useStyles1 = makeStyles(theme => ({
        success: {
            backgroundColor: green[600],
        },
        error: {
            backgroundColor: theme.palette.error.dark,
        },
        info: {
            backgroundColor: theme.palette.primary.main,
        },
        warning: {
            backgroundColor: amber[700],
        },
        icon: {
            fontSize: 20,
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing(1),
        },
        message: {
            display: 'flex',
            alignItems: 'center',
        },
    }));

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={msgList.length !== 0}
                autoHideDuration={6000}
                onClose={onClose}
            >
                <SnackbarContent
                    style={{}}
                    message={msgList.length !== 0 ? msgList[0].msg : "empty msg"}
                    action={[
                        <IconButton key="close" onClick={()=>msgList.length !== 0 ? onClose(msgList[0].msg):onClose("")}>
                            <CloseIcon/>
                        </IconButton>,
                    ]}/>
            </Snackbar>
        </div>
    )
}

