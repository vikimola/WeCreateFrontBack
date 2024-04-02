import React, {useState} from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";
import {Alert, Button, Divider, FormControl, FormHelperText, Grid, TextField, useMediaQuery} from "@mui/material";
import {BsSun} from 'react-icons/bs';
import {HiMiniLanguage} from 'react-icons/hi2';
import {BiDotsHorizontalRounded, BiMessageSquareDetail, BiSearchAlt} from 'react-icons/bi';
import {MdDns} from 'react-icons/md';
import {RiSecurePaymentLine} from 'react-icons/ri';
import {SlEnvolopeLetter} from "react-icons/sl";
import {CgProfile} from "react-icons/cg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";


export default function Services(props) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isSmallScreen2 = useMediaQuery('(max-width: 960px)');
    const GradientContainer = props.bgGradient
    const computer = require("../image/services/computer1.png")
    const comp = require("../image/services/computer2.png")
    const [successMessage, setSuccessMessage] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [formData, setFormData] =
        useState({email: '',
    });
    const handleChange = (e) => {
        const {id, value} = e.target;
        // console.log(id, value);
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    const handleSubmit = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/backend/api/newsletter/subscribe/', formData);
            const messageS = <FormattedMessage id='serv.sub.alert.succ'/>
            setSuccessMessage(messageS);
            setOpenSuccess(true);
            setOpenWarning(false);
        } catch (error) {
            const messageW = <FormattedMessage id='serv.sub.alert.warn'/>
            setWarningMessage(messageW);
            setOpenSuccess(false);
            setOpenWarning(true);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Optional: Adds smooth scrolling animation
        });
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


            <div style={{height: '5rem'}}>
            </div>

            <Grid container className="serv-title">
                <Typography component={'span'} variant='h3'>
                    <FormattedMessage id='serv.title'
                                      defaultMessage="Services"/>
                </Typography>
                <br/>
                <Typography component={'span'} variant='h5' style={{textAlign: 'center'}}>
                    <FormattedMessage id='serv.description'
                                      defaultMessage="Services"/>
                </Typography>
            </Grid>
            <br/>
            <Grid container className="serv-top">
                <Grid container item sm={12} md={6} className="serv-top-first">

                    <img className="serv-top-first-img" src={computer} alt="computerImg"/>
                </Grid>

                <Grid container item sm={12} md={6} className="serv-top-second">
                    <div className="serv-top-second-div">
                        {isSmallScreen2 && <br/>}

                        <Typography component={'span'} variant='body1'>
                            <FormattedMessage id='serv.top.computer1'/>
                        </Typography>
                        <br/>
                        <Typography component={'span'} variant='body1'>
                            <FormattedMessage id='serv.top.computer2'/>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br/>
            <Grid container className="serv-middle">
                <Grid container item sm={12} md={8} className="serv-middle-first">
                    <div className="serv-middle-first-div">
                        {isSmallScreen2 && <br/>}

                        <Typography component={'span'} variant='h4'>
                            <FormattedMessage id='serv.middle.top'/>
                        </Typography>
                        <br/>
                        <ol>
                            <li>
                                <Typography component={'span'} variant='h6' sx={{fontWeight: 'bold'}}>
                                    <FormattedMessage id='serv.middle.title1'/>
                                </Typography>
                                <Typography component={'span'} variant='body1'>
                                    <FormattedMessage id='serv.middle.description1'/>
                                </Typography>
                            </li>
                            <br/>
                            <li>
                                <Typography component={'span'} variant='h6' sx={{fontWeight: 'bold'}}>
                                    <FormattedMessage id='serv.middle.title2'/>
                                </Typography>
                                <Typography component={'span'} variant='body1'>
                                    <FormattedMessage id='serv.middle.description2'/>
                                </Typography>
                            </li>
                            <br/>
                            <li>
                                <Typography component={'span'} variant='h6' sx={{fontWeight: 'bold'}}>
                                    <FormattedMessage id='serv.middle.title3'/>
                                </Typography>
                                <Typography component={'span'} variant='body1'>
                                    <FormattedMessage id='serv.middle.description3'/>
                                </Typography>
                            </li>
                            <br/>
                            <li>
                                <Typography component={'span'} variant='h6' sx={{fontWeight: 'bold'}}>
                                    <FormattedMessage id='serv.middle.title4'/>
                                </Typography>
                                <Typography component={'span'} variant='body1'>
                                    <FormattedMessage id='serv.middle.description4'/>
                                </Typography>
                            </li>
                        </ol>
                    </div>
                </Grid>

                <Grid container item sm={12} md={4} className="serv-middle-second">
                    {/*<img className="serv-middle-second-img" src={comp} alt="compImg"/>*/}
                    {/*<img className="serv-top-first-img" src={tablet} alt="tabletImg"/>*/}
                    {isSmallScreen &&
                        <img className="serv-middle-second-img" src={comp} alt="compImg" style={{width: '70%'}}/>}
                    {!isSmallScreen &&
                        <img className="serv-middle-second-img" src={comp} alt="compImg" style={{width: '95%'}}/>}

                </Grid>

            </Grid>

            <br/>

            <div className="serv-middle2-first-div">
                <Typography component={'span'} variant="body1">
                    <FormattedMessage id='serv.middle2.theme1'/>
                </Typography>
            </div>

            <Grid container className="serv-middle2">
                <Grid container item sm={12} md={6} className="serv-middle2-first">
                    <div className="serv-middle2-first-div">
                        <div className="serv-middle2-first-div2">
                            <BsSun className="serv-middle2-first-div2-logo"/>
                            <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                                <FormattedMessage id='serv.middle2.theme2'/>
                            </Typography>
                        </div>
                    </div>
                </Grid>

                <Grid container item sm={12} md={6} className="serv-middle2-first">
                    <div className="serv-middle2-first-div">
                        <div className="serv-middle2-first-div2">
                            <HiMiniLanguage className="serv-middle2-first-div2-logo"/>
                            <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                                <FormattedMessage id='serv.middle2.theme3'/>
                            </Typography>
                        </div>
                        <br/>
                    </div>
                </Grid>
            </Grid>

            <div className="serv-middle2-first-div">
                <br/>
                <Typography component={'span'} variant="body1">
                    <FormattedMessage id='serv.middle2.theme4'/>
                </Typography>
            </div>

            <Grid container item className="serv-middle2">

                <Grid container item sm={12} md={6} className="serv-middle2-first">

                    <div className="serv-middle2-first-div2">
                        <BiSearchAlt className="serv-middle2-first-div2-logo"/>
                        <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                            <FormattedMessage id='serv.middle2.theme5'/>
                        </Typography>
                    </div>
                    <div className="serv-middle2-first-div2">
                        <MdDns className="serv-middle2-first-div2-logo"/>
                        <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                            <FormattedMessage id='serv.middle2.theme6'/>
                        </Typography>
                    </div>
                    <div className="serv-middle2-first-div2">
                        <RiSecurePaymentLine className="serv-middle2-first-div2-logo"/>
                        <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                            <FormattedMessage id='serv.middle2.theme7'/>
                        </Typography>
                    </div>
                    <div className="serv-middle2-first-div2">
                        <SlEnvolopeLetter className="serv-middle2-first-div2-logo"/>
                        <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                            <FormattedMessage id='serv.middle2.theme8'/>
                        </Typography>
                    </div>
                </Grid>
                <Grid container item sm={12} md={6} className="serv-middle2-first">

                    <div className="serv-middle2-first-div2">
                        <BiMessageSquareDetail className="serv-middle2-first-div2-logo"/>
                        <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                            <FormattedMessage id='serv.middle2.theme9'/>
                        </Typography>
                    </div>
                    <div className="serv-middle2-first-div2">
                        <CgProfile className="serv-middle2-first-div2-logo"/>
                        <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                            <FormattedMessage id='serv.middle2.theme10'/>
                        </Typography>
                    </div>
                    <div className="serv-middle2-first-div2">
                        <BiDotsHorizontalRounded className="serv-middle2-first-div2-logo"/>
                        <Typography component={'span'} variant="body1" sx={{fontWeight: 'bold'}}>
                            <FormattedMessage id='serv.middle2.theme11'/>
                        </Typography>
                    </div>


                </Grid>
            </Grid>
            <br/>
            <Grid container className="serv-bottom">
                <div className="serv-bottom-div" style={{textAlign: 'center', width: isSmallScreen ? '100%' : '60%'}}>

                    <Typography component={'span'} variant='h4' style={{textAlign: 'center'}}>
                        <FormattedMessage id='about.join.title'/>
                    </Typography>

                    <br/>

                    <NavLink to="/contact" onClick={scrollToTop}>
                        <Button className="about-third-button" variant="contained" color="secondary"
                                sx={{
                                    padding: '0.5em', paddingLeft: '1em', paddingRight: '1em',
                                    marginTop: '5%', marginBottom: '5%'
                                }}>
                            <Typography component={'span'} variant='body1' style={{color: "#E0F2F1"}}>
                                <FormattedMessage id='about.third.button.text'
                                                  defaultMessage="Message Us"/>
                            </Typography>
                        </Button>
                    </NavLink>

                    <br/>
                    <br/>

                    {isSmallScreen ?
                        (<Typography component={'span'} variant="h4"
                                     sx={{fontWeight: 'bold', overflowWrap: 'break-word'}}>
                            < FormattedMessage id='serv.bottom.title'/>
                        </Typography>)
                        :
                        (<Divider><Typography component={'span'} variant="h4"
                                              sx={{fontWeight: 'bold', overflowWrap: 'break-word'}}>
                            < FormattedMessage id='serv.bottom.title'/>
                        </Typography></Divider>)
                    }


                    <br/>
                    <br/>

                    <Typography component={'span'} variant="h6">
                        <FormattedMessage id='serv.bottom.description'/>
                    </Typography>

                    <br/>

                    <FormControl
                        margin="normal"
                        color="primary"
                        variant="filled">
                        <TextField id="email"
                                   type="email"
                                   value={formData.email} onChange={handleChange} color="secondary"
                                   variant="outlined" style={{width: '100%'}}
                                   InputLabelProps={{color: "primary"}}
                                   label={
                                       <Typography component={'span'} variant="body2">
                                           <FormattedMessage id='serv.form.email'
                                                             defaultMessage="Mail"/>
                                       </Typography>
                                   }
                                   aria-describedby="email-text"/>
                        <FormHelperText id="email-text">
                            <Typography component={'span'} variant="body2">
                                <FormattedMessage id='serv.form.email.helper'
                                                  defaultMessage="We'll never share your email."/>
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


                        <NavLink
                            className="header-logo-navlink"
                            to="/servicii">
                            <Button variant="contained" onClick={() => handleSubmit(formData)} color="secondary">
                                <Typography component={'span'} variant='body1' style={{color: "#E0F2F1"}}>
                                    <FormattedMessage id='serv.bottom.button'
                                                      defaultMessage="Subscribe"/>
                                </Typography>
                            </Button>
                        </NavLink>
                    </FormControl>

                    <br/>
                    <br/>

                    <Typography component={'span'} variant="caption">
                        <FormattedMessage id="serv.bottom.gdpr1">
                        </FormattedMessage>

                        <FormattedMessage
                            id="serv.bottom.gdpr.link"
                            defaultMessage="{link}"
                            values={{
                                link: <a href="/politica-confidentialitate" target="_blank" rel="noopener noreferrer">
                                    <FormattedMessage
                                        id="serv.bottom.gdpr2"/>
                                </a>
                            }}
                        />

                        <FormattedMessage id="serv.bottom.gdpr3">
                        </FormattedMessage>

                        <FormattedMessage
                            id="serv.bottom.gdpr.link"
                            defaultMessage="{link}"
                            values={{
                                link: <a href="/termeni-conditii" target="_blank" rel="noopener noreferrer">
                                    <FormattedMessage
                                        id="serv.bottom.gdpr4"/>
                                </a>
                            }}
                        />

                        <FormattedMessage id="serv.bottom.gdpr5">
                        </FormattedMessage>
                    </Typography>
                    <br/>
                    <Typography component={'span'} variant="caption">

                        <FormattedMessage
                            id="serv.bottom.gdpr.link"
                            defaultMessage="{link}"
                            values={{
                                link: <a href="/newsletter-unsubscribe" target="_blank" rel="noopener noreferrer">
                                    <FormattedMessage
                                        id="serv.bottom.unsub1"/>
                                </a>
                            }}
                        />

                        <FormattedMessage id="serv.bottom.unsub2">
                        </FormattedMessage>
                    </Typography>


                    <br/>
                    <br/>

                </div>
            </Grid>


        </GradientContainer>
    )


}