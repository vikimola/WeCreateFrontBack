import React, {useState} from 'react';
import {Button, Grid, Paper, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import CheckIcon from '@mui/icons-material/Check';
import {FormattedMessage} from "react-intl";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
    cookiePopup: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: theme.spacing(2),
        textAlign: 'center',
        zIndex: 10
    }
}));

function CookieConsent() {
    const classes = useStyles();
    const [showPopup, setShowPopup] = useState(!localStorage.getItem('accepted-cookies'));

    const acceptCookies = () => {
        localStorage.setItem('accepted-cookies', 'true');
        setShowPopup(false);
    };

    const rejectCookies = () => {
        localStorage.setItem('accepted-cookies', 'false');
        setShowPopup(false);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        showPopup && (
            <Paper className={classes.cookiePopup}>
                <Grid container justifyContent="flex-end" alignItems="center">
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </Grid>
                <Typography variant="body1" color="#E0E0E0">
                    <FormattedMessage
                        id='cookie.popup.text'
                    />
                </Typography>

                <br/>
                <Button
                    variant="contained"
                    className="cookie-popup-button"
                    startIcon={<CheckIcon/>}
                    onClick={acceptCookies}
                ><Typography variant="body2" color="#E0E0E0">
                    <FormattedMessage
                        id='cookie.popup.button.accept'
                    />
                </Typography>

                </Button>


                <Button
                    variant="contained"
                    className="cookie-popup-button"
                    startIcon={<CheckIcon/>}
                    onClick={rejectCookies}
                >
                    <Typography variant="body2" color="#E0E0E0">
                        <FormattedMessage
                            id='cookie.popup.button.reject'
                        />
                    </Typography>
                </Button>
            </Paper>

        )


    );
}

export default CookieConsent;
