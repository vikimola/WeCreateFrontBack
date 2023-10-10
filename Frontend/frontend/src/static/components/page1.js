import React from 'react';
import {Box, Button, Grid, styled, useMediaQuery} from "@mui/material";
import {FormattedMessage} from "react-intl";
import Typography from "@mui/material/Typography";
import companyLogo from "../image/WECREATE_no_bg.png";
import logoG1 from "../image/page1/circuit_g.png";
import {NavLink} from "react-router-dom";
import page1img from "../image/page1/computer.png";


export default function Page1(props) {
    const p1MainImgLight = require('../image/page1/computer4.png')
    const p1MainImgDark = require('../image/page1/computer5.png')
    const logoG1 = require('../image/page1/earth_g2.png')
    const logoW1 = require('../image/page1/earth_w2.png')
    const logoG2 = require('../image/page1/circuit_g2.png')
    const logoW2 = require('../image/page1/circuit_w2.png')
    const logoG3 = require('../image/page1/design_g2.png')
    const logoW3 = require('../image/page1/design_w.png')
    const logoG4 = require('../image/page1/startup_g.png')
    const logoW4 = require('../image/page1/startup_w3.png')
    const GradientContainer = props.bgGradient
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));


    return (
        <GradientContainer>

            <Grid container className="page1-blank-top">
            </Grid>

            <Grid container item xs={12} className="page1-container">

                {/*<img className="logo" style={{height:'50rem'}}*/}
                {/*     src={companyLogo} alt="logo1"/>*/}

                <Grid item xs={12} md={6} className="page1-top-first">

                    <div className="page1-top-first-text-button-container">

                        {/*<div className="page1-top-first-text-container">*/}
                        <Typography variant="h3">
                            <FormattedMessage id="page1.title"
                                              defaultMessage="Launch your business with an innovative, adaptable and cost-effective website."/>
                        </Typography>
                        <br/>
                        <Typography variant='h5'>
                            <FormattedMessage id='page1.text'
                                              defaultMessage="yo"/>
                        </Typography>
                        <br/>

                        <div className="page1-top-first-button-container">
                            <NavLink
                                className="header-logo-navlink"
                                to="/servicii">
                                <Button className="page1-top-first-button" variant="contained" color="secondary">
                                    <Typography variant='h6' style={{color: "#E0F2F1"}}>
                                        <FormattedMessage id='page1.button.text'
                                                          defaultMessage="Work With Us"/>
                                    </Typography>
                                </Button>
                            </NavLink>
                        </div>

                    </div>

                </Grid>

                <Grid item xs={12} md={6} className="page1-top-second">
                    {props.isDarkTheme ?
                        <img className="page1-top-second-img" src={p1MainImgDark} alt="page1-img"/>
                        :
                        <img className="page1-top-second-img" src={p1MainImgLight} alt="page1-img"/>}
                </Grid>

            </Grid>


            <Grid container item xs={12} className="page1-bottom">

                <Grid item xs={12} md={6} className="page1-bottom-logos-container">


                    <div className="page1-bottom-logo-container">
                        {isMediumScreen && <br/>}
                        {props.isDarkTheme ? <img className="page1-bottom-logo" src={logoW1} alt="logo1"/> :
                            <img className="page1-bottom-logo" src={logoG1} alt="logo1"/>}
                        <Typography variant="body1">
                            <FormattedMessage id='page1.description.logo1'
                                              defaultMessage="The world in the palm of your hand - wesites easily available from any location, at any time"/>
                        </Typography>
                    </div>


                    <div className="page1-bottom-logo-container">
                        {props.isDarkTheme ? <img className="page1-bottom-logo" src={logoW2} alt="logo2"/> :
                            <img className="page1-bottom-logo" src={logoG2} alt="logo2"/>}

                        <Typography variant="body1"><FormattedMessage id='page1.description.logo2'
                                                                      defaultMessage="Newest equipment and latest technologies"
                        /></Typography>
                    </div>

                </Grid>

                <Grid item xs={12} md={6} className="page1-bottom-logos-container">


                    <div className="page1-bottom-logo-container">
                        {isMediumScreen && <br/>}
                        {props.isDarkTheme ? <img className="page1-bottom-logo" src={logoW3} alt="logo3"/> :
                            <img className="page1-bottom-logo" src={logoG3} alt="logo3"/>}
                        <Typography variant='body1'><FormattedMessage id='page1.description.logo3'
                                                                      defaultMessage="Exclusively crafted design, customized to perfectly fit your requirements"
                        /></Typography>
                    </div>


                    <div className="page1-bottom-logo-container">
                        {isMediumScreen && <br/>}

                        {props.isDarkTheme ? <img className="page1-bottom-logo" src={logoW4} alt="logo4"/> :
                            <img className="page1-bottom-logo" src={logoG4} alt="logo4"/>}
                        <Typography variant='body1'><FormattedMessage id='page1.description.logo4'
                                                                      defaultMessage="Youthful and committed team with flexible and adaptive thinking"/>
                        </Typography>
                    </div>

                </Grid>
            </Grid>
        </GradientContainer>
    )
}