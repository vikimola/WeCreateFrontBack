import React, {useState} from "react";
import axios from 'axios';
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";
import {Button, FormControl, FormHelperText, FormLabel, Grid, TextField, useMediaQuery} from "@mui/material";
import {BiMap, BiPhoneCall} from "react-icons/bi";
import {LuMails} from "react-icons/lu";
import {AiOutlineFieldTime, AiOutlineInfoCircle} from "react-icons/ai";


export default function Contact(props) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const GradientContainer = props.bgGradient
    const companyLogo = require("../image/page1/img_1.png")
    const outreachLight = require("../image/contact/outreach2.png")
    const outreachDark = require("../image/contact/outreach.png")
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });


    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (formData) => {
        try {
            const response = await axios.post('backend/api/create_message/', formData);
            console.log('Message sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };


    return (
        <GradientContainer>
            <Header/>

            <div style={{height: '5rem'}}>
            </div>

            <Grid container>
                <div className="contact-title">

                    <Typography component={'span'} variant='h3'>
                        <FormattedMessage id='contact.title'
                                          defaultMessage="Contact"/>
                    </Typography>
                    <br/>
                    <Typography component={'span'} variant='h5'>
                        <FormattedMessage id='contact.description'/>
                    </Typography>

                    <br/>


                    <Typography component={'span'} variant="body1">
                        <FormattedMessage id='contact.form.description'
                                          defaultMessage="Reach out and get in touch with us. We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to send us a message using the form below. Your comments and inquiries are important to us, and we'll get back to you as soon as possible."/>
                    </Typography>
                </div>
            </Grid>

            <br/>

            <Grid container className="contact-container">
                <Grid container item sm={12} md={6} className="contact-top">

                    <div className="contact-company-name">
                        <br/>
                        <img className="contact-company-logo" src={companyLogo} alt="logo"/>
                        <Typography component={'span'} variant="body1">
                            <FormattedMessage id='contact.company.name'
                                              defaultMessage="WECREATE DESIGNS S.R.L."/>
                        </Typography>
                    </div>


                    <div className="contact-category">
                        <br/>
                        <br/>
                        <div className="contact-category-icon-div">
                            <BiPhoneCall className="contact-category-icon"/>
                            <Typography component={'span'} variant="h5" style={{fontWeight: 'bold'}}>
                                <FormattedMessage id='contact.phone.title'
                                                  defaultMessage="Call us:"/>
                            </Typography>
                        </div>
                        <div style={{margin: '0.5rem 0'}}></div>
                        <div className="contact-category-text-div">
                            <Typography component={'span'} variant="body1">
                                <FormattedMessage id='contact.phone'
                                                  defaultMessage="+40755464904"/>
                            </Typography>
                        </div>
                    </div>

                    <div className="contact-category">
                        <br/>
                        <br/>
                        <div className="contact-category-icon-div">
                            <LuMails className="contact-category-icon"/>
                            <Typography component={'span'} variant="h5" style={{fontWeight: 'bold'}}>
                                <FormattedMessage id='contact.mail.title'
                                                  defaultMessage="Mail:"/>
                            </Typography>
                        </div>
                        <div style={{margin: '0.5rem 0'}}></div>
                        <div className="contact-category-text-div">
                            <Typography component={'span'} variant="body1"
                                        style={{overflowWrap: 'break-word', wordBreak: 'break-all'}}>
                                <FormattedMessage id='contact.mail1'/>
                            </Typography>
                            <br/>
                            <Typography component={'span'} variant="body1"
                                        style={{overflowWrap: 'break-word', wordBreak: 'break-all'}}>
                                <FormattedMessage id='contact.mail2'/>
                            </Typography>
                        </div>
                    </div>

                    <div className="contact-category">
                        <br/>
                        <br/>
                        <div className="contact-category-icon-div">
                            <BiMap className="contact-category-icon"/>
                            <Typography component={'span'} variant="h5" style={{fontWeight: 'bold'}}>
                                <FormattedMessage id='contact.address.title'
                                                  defaultMessage="Location:"/>
                            </Typography>
                        </div>
                        <div style={{margin: '0.5rem 0'}}></div>
                        <div className="contact-category-text-div">
                            <Typography component={'span'} variant="body1">
                                <FormattedMessage id='contact.address1'/>
                                <br/>
                                <FormattedMessage id='contact.address2'/>
                            </Typography>
                        </div>
                    </div>

                    <div className="contact-category">
                        <br/>
                        <br/>
                        <div className="contact-category-icon-div">
                            <AiOutlineInfoCircle className="contact-category-icon"/>
                            <Typography component={'span'} variant="h5" style={{fontWeight: 'bold'}}>
                                <FormattedMessage id='contact.CUI.title'
                                                  defaultMessage="CUI: 46457079"/>
                            </Typography>
                        </div>
                        <div style={{margin: '0.5rem 0'}}></div>
                        <div className="contact-category-text-div">
                            <Typography component={'span'} variant="body1">
                                <FormattedMessage id='contact.CUI'
                                                  defaultMessage="CUI: 46457079"/>
                            </Typography>
                        </div>
                    </div>

                    <div className="contact-category">
                        <br/>
                        <br/>
                        <div className="contact-category-icon-div">
                            <AiOutlineInfoCircle className="contact-category-icon"/>
                            <Typography component={'span'} variant="h5" style={{fontWeight: 'bold'}}>
                                <FormattedMessage id='contact.registru.title'
                                                  defaultMessage="Registrul comerțului:"/>
                            </Typography>
                        </div>
                        <div style={{margin: '0.5rem 0'}}></div>
                        <div className="contact-category-text-div">
                            <Typography component={'span'} variant="body1">
                                <FormattedMessage id='contact.registru'
                                                  defaultMessage="J19/404/12.07.2022"/>
                            </Typography>
                        </div>
                    </div>

                    <div className="contact-category">
                        <br/>
                        <br/>
                        <div className="contact-category-icon-div">
                            <AiOutlineFieldTime className="contact-category-icon"/>
                            <Typography component={'span'} variant="h5" style={{fontWeight: 'bold'}}>
                                <FormattedMessage id='contact.program.title'
                                                  defaultMessage="Program:"/>
                            </Typography>
                        </div>
                        <div style={{margin: '0.5rem 0'}}></div>
                        <div className="contact-category-text-div">
                            <Typography component={'span'} variant="body1">
                                <FormattedMessage id='contact.program'/>
                            </Typography>
                        </div>
                    </div>

                    <br/>

                </Grid>

                <Grid container item sm={12} md={6} className="contact-middle">


                    <div className="contact-middle-form-content">
                        {isSmallScreen && <br/>}
                        {isSmallScreen && <br/>}

                        <FormControl>
                            <FormLabel>
                                <Typography component={'span'} variant="h4" style={{fontWeight: '600'}}>
                                    <FormattedMessage id='contact.form'
                                                      defaultMessage="MESSAGE FORM"/>
                                </Typography>
                            </FormLabel>
                        </FormControl>


                        <FormControl
                            margin="normal"
                            color="primary"
                            variant="filled"
                            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}
                        >
                            <TextField id="name" value={formData.name} onChange={handleChange}
                                // type="email"
                                       variant="standard" color="secondary" style={{width: '100%'}}
                                       InputLabelProps={{color: "primary"}}
                                       label={
                                           <Typography component={'span'} variant="body2">
                                               <FormattedMessage id='contact.form.name'
                                                                 defaultMessage="Name"/>
                                           </Typography>
                                       }
                                       aria-describedby="email-text"/>
                            <FormHelperText style={{color: "text"}} id="name-text">
                                <Typography component={'span'} variant="body2">
                                    <FormattedMessage id='contact.form.name.helper'
                                                      defaultMessage="We'll never share your name."/>
                                </Typography>
                            </FormHelperText>
                        </FormControl>

                        <br/>

                        <FormControl
                            margin="normal"
                            color="primary"
                            variant="filled"
                            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                            <TextField id="phone" value={formData.phone} onChange={handleChange}
                                       type="tel"
                                       variant="standard" color="secondary" style={{width: '80%'}}
                                       InputLabelProps={{color: "primary"}}
                                       label={
                                           <Typography component={'span'} variant="body2">
                                               <FormattedMessage id='contact.form.phone'
                                                                 defaultMessage="Phone num"/>
                                           </Typography>}
                                       aria-describedby="phone-text"/>
                            <FormHelperText id="phone-text">
                                <Typography component={'span'} variant="body2">
                                    <FormattedMessage id='contact.form.phone.helper'
                                                      defaultMessage="We'll never share your phone num."/>
                                </Typography>
                            </FormHelperText>
                        </FormControl>

                        <br/>

                        <FormControl
                            margin="normal"
                            color="primary"
                            variant="filled"
                            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>

                            <TextField id="email" value={formData.email} onChange={handleChange}
                                       type="email"
                                       variant="standard" color="secondary" style={{width: '100%'}}
                                       InputLabelProps={{color: "primary"}}
                                       label={
                                           <Typography component={'span'} variant="body2">
                                               <FormattedMessage id='contact.form.email'
                                                                 defaultMessage="Mail"/>
                                           </Typography>
                                       }
                                       aria-describedby="email-text"/>
                            <FormHelperText id="email-text">
                                <Typography component={'span'} variant="body2">
                                    <FormattedMessage id='contact.form.email.helper'
                                                      defaultMessage="We'll never share your email."/>
                                </Typography>
                            </FormHelperText>
                        </FormControl>


                        <br/>

                        <FormControl
                            margin="normal"
                            color="primary"
                            variant="filled"
                            sx={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                                width: isSmallScreen ? '100%' : '60%'
                            }}>
                            <TextField id="message" value={formData.message} onChange={handleChange} multiline
                                       rows={7} style={{width: '100%'}} color="secondary"
                                       InputLabelProps={{color: "primary"}}
                                       label={
                                           <Typography component={'span'} variant="body2">
                                               <FormattedMessage id='contact.form.message'
                                                                 defaultMessage="Message"/>
                                           </Typography>
                                       } aria-describedby="email-text"/>
                            <FormHelperText id="message-text">
                                <Typography component={'span'} variant="body2">
                                    <FormattedMessage id='contact.form.message.helper'
                                                      defaultMessage="Ask us anything!"/>
                                </Typography>
                            </FormHelperText>
                        </FormControl>

                        <br/>

                        {/*<Stack sx={{width: '100%'}} spacing={2} className="contact-middle-form-alert">*/}
                        {/*    <Alert severity="error" sx={{width: '70%'}}>*/}
                        {/*        <Typography component={'span'} variant="body2">*/}
                        {/*            <FormattedMessage id='contact.form.submit.error'*/}
                        {/*                              defaultMessage="Err"/>*/}
                        {/*        </Typography>*/}
                        {/*    </Alert>*/}
                        {/*    <Alert icon={<CheckIcon fontSize="inherit"/>} severity="success" sx={{width: '70%'}}>*/}
                        {/*        <Typography component={'span'} variant="body2">*/}
                        {/*            <FormattedMessage id='contact.form.submit.success'*/}
                        {/*                              defaultMessage="Succ"/>*/}
                        {/*        </Typography>*/}
                        {/*    </Alert>*/}
                        {/*</Stack>*/}


                        <FormControl margin="normal"
                                     color="primary"
                                     variant="filled"
                                     sx={{
                                         display: 'flex', flexDirection: 'row', justifyContent: 'center',
                                         width: isSmallScreen ? '100%' : '60%'
                                     }}>
                            <Button variant="contained" style={{width: '50%'}} color="secondary"
                                    onClick={() => handleSubmit(formData)}>
                                <Typography component={'span'} variant="body2">
                                    <FormattedMessage id='contact.form.submit'
                                                      defaultMessage="Send"/>
                                </Typography>
                            </Button>
                        </FormControl>

                    </div>


                </Grid>

                <Grid container item sm={12} className="contact-bottom">
                    {props.isDarkTheme && isSmallScreen &&
                        <img className="contact-bottom-img" src={outreachDark} style={{width: '100%'}}
                             alt="outreach"/>}
                    {props.isDarkTheme && !isSmallScreen &&
                        <img className="contact-bottom-img" src={outreachDark} style={{width: '40%'}}
                             alt="outreach"/>}
                    {!props.isDarkTheme && isSmallScreen &&
                        <img className="contact-bottom-img" src={outreachLight} style={{width: '100%'}}
                             alt="outreach"/>}
                    {!props.isDarkTheme && !isSmallScreen &&
                        <img className="contact-bottom-img" src={outreachLight} style={{width: '40%'}}
                             alt="outreach"/>}
                </Grid>
            </Grid>
        </GradientContainer>


    )


}