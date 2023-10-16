import React, {useState} from "react";
import Header from "../components/header";
import {Alert, Button, FormControl, FormHelperText, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {AiOutlineClose} from "react-icons/ai";

export default function NewsletterUnsubscribe(props) {
    const GradientContainer = props.bgGradient
    const [successMessage, setSuccessMessage] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        // console.log(id, value);
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (formData) => {
        try {
            await axios.post('backend/api/newsletter/unsubscribe/', formData);
            const messageS = <FormattedMessage id='newsletter.unsub.alert.succ'/>
            setSuccessMessage(messageS);
            setOpenSuccess(true);
            setOpenWarning(false);
        } catch (error) {
            const messageW = <FormattedMessage id='newsletter.unsub.alert.warn'/>
            setWarningMessage(messageW);
            setOpenSuccess(false);
            setOpenWarning(true);
        }
    };


    const handleCloseSuccess = () => {
        setOpenSuccess(false);
    };

    const handleCloseWarning = () => {
        setOpenWarning(false);
    };


    return (
        <GradientContainer>
            <Header/>


            <Grid container className='newsletter-unsub'>
                <div className='newsletter-unsub-content'>

                    <Typography component={'span'} variant="h3" style={{textAlign: 'center'}}>
                        <FormattedMessage id='newsletter.unsub.title'
                                          defaultMessage="Newsletter Unsubscribe"/>
                    </Typography>

                    <br/>


                    <FormControl
                        margin="normal"
                        color="primary"
                        variant="filled">
                        <TextField id="email"
                                   type="email"
                                   value={formData.email} onChange={handleChange} variant="outlined" color="secondary"
                                   style={{width: '100%'}}
                                   InputLabelProps={{color: "primary"}}
                                   label={
                                       <Typography variant="body2">
                                           <FormattedMessage id='newsletter.unsub.email'
                                                             defaultMessage="Mail"/>
                                       </Typography>
                                   }
                                   aria-describedby="email-text"/>
                        <FormHelperText id="email-text">
                            <Typography component={'span'} variant="body2">
                                <FormattedMessage id='newsletter.unsub.email.helper'
                                                  defaultMessage="Sad to see you go!"/>
                            </Typography>
                        </FormHelperText>
                        <br/>

                        {openSuccess && (
                            <div>
                                <Button
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    sx={{textTransform: 'none'}}
                                > <Alert onClick={handleCloseSuccess} icon={<CheckIcon fontSize="inherit"/>}
                                         severity="success" sx={{width: '100%'}}>
                                    <Typography component={'span'} variant="body2">
                                        {successMessage}
                                    </Typography>

                                </Alert>
                                </Button>
                                <br/>
                                <br/>
                            </div>)}


                        {openWarning && (
                            <div>
                                <Button
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    sx={{textTransform: 'none'}}>
                                    <Alert onClick={handleCloseWarning} severity="warning" sx={{width: '100%'}}>
                                        <Typography component={'span'} variant="body2">
                                            {warningMessage}
                                        </Typography>
                                    </Alert>
                                </Button>
                                <br/>
                                <br/>
                            </div>
                        )}


                        <Button onClick={() => handleSubmit(formData)} variant="contained" color="secondary">
                            <Typography component={'span'} variant='body1' style={{color: "#E0F2F1"}}>
                                <FormattedMessage id='newsletter.unsub.button'
                                                  defaultMessage="Unsubscribe"/>
                            </Typography>
                        </Button>
                    </FormControl>
                </div>
            </Grid>


        </GradientContainer>
    )


}