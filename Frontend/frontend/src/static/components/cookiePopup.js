import React, {useState} from 'react';
import {Button, Paper, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import CheckIcon from '@mui/icons-material/Check';
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles((theme) => ({
    cookiePopup: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: theme.spacing(2),
        textAlign: 'center',
        zIndex: 10
    },
    acceptButton: {
        background: '#4CAF50',
        color: 'white',
        padding: theme.spacing(1, 2),
        cursor: 'pointer',
        // zIndex: 11
    },
}));

function CookieConsent() {
    const classes = useStyles();
    const [showPopup, setShowPopup] = useState(!localStorage.getItem('accepted-cookies'));

    const acceptCookies = () => {
        localStorage.setItem('accepted-cookies', 'true');
        setShowPopup(false);
    };

    return (
        showPopup && (
            <Paper className={classes.cookiePopup}>
                <Typography variant="body1">
                    <FormattedMessage
                        id='cookie.popup.text'
                    />
                </Typography>
                <br/>
                <Button
                    variant="contained"
                    className={classes.acceptButton}
                    startIcon={<CheckIcon/>}
                    onClick={acceptCookies}
                >
                    Accept
                </Button>
            </Paper>
        )
    );
}

export default CookieConsent;
