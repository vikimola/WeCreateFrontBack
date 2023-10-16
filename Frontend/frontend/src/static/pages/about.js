import React from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";
import {Button, Grid, useMediaQuery} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function About(props) {
    const GradientContainer = props.bgGradient
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isSmallScreen2 = useMediaQuery('(max-width: 960px)');
    const imgFirstLight = require("../image/about/computerLight.jpg")
    const imgFirstDark = require("../image/about/computerDark.jpg")
    const vision = require("../image/about/vision.jpg")

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Optional: Adds smooth scrolling animation
        });
    };
    return (
        <GradientContainer>
            <Header/>

            <div style={{height: '5rem'}}>
            </div>

            <Grid container className="about-title">
                <Typography variant='h3'>
                    <FormattedMessage id='about.title'
                                      defaultMessage="About"/>
                </Typography>
                <br/>
                <Typography variant='h5' style={{textAlign: 'center'}}>
                    <FormattedMessage id='about.description'/>
                </Typography>
            </Grid>
            <br/>
            <br/>

            <Grid container className="about-top">
                <Grid container item sm={12} md={6} className="about-top-first">
                    {props.isDarkTheme ?
                        <img className="about-top-first-img" src={imgFirstDark} alt="topImgDark"/>
                        :
                        <img className="about-top-first-img" src={imgFirstLight} alt="topImgLight"/>
                    }
                </Grid>


                <Grid container item sm={12} md={6} className="about-top-second">
                    <div className="about-top-second-div">
                        {isSmallScreen2 && <br/>}
                        {isSmallScreen2 && <br/>}
                        <Typography variant='body1'>
                            <FormattedMessage id='about.company.description1'/>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <FormattedMessage id='about.company.description2'/>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <FormattedMessage id='about.company.description3'/>
                        </Typography>
                        <br/>
                        <Typography variant='h5'>
                            <FormattedMessage id='about.company.description4'/>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br/>

            <Grid container className="about-middle">
                <Grid container item sm={12} md={7} className="about-middle-first">

                    {isSmallScreen && <br/>}
                    <div className="about-middle-first-div">
                        <Typography variant='h4'>
                            <FormattedMessage id='about.vision.title'/>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <FormattedMessage id='about.vision.description'/>
                        </Typography>
                        <br/>
                        <br/>
                        <Typography variant='h4'>
                            <FormattedMessage id='about.mission.title'/>
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <FormattedMessage id='about.mission.description'/>
                        </Typography>
                        <br/>
                    </div>
                </Grid>

                <Grid container item sm={12} md={5} className="about-middle-second">
                    <img className="about-middle-second-img" src={vision} alt="eyeImg"/>

                </Grid>
            </Grid>

            <br/>

            <Grid container className="about-bottom">
                <Typography variant='h4' style={{textAlign: 'center'}}>
                    <FormattedMessage id='about.join.title'/>
                </Typography>

                <br/>

                <NavLink to="/contact" onClick={scrollToTop}>
                    <Button className="about-third-button" variant="contained" color="secondary"
                            sx={{
                                padding: '0.5em', paddingLeft: '1em', paddingRight: '1em',
                                marginTop: '5%', marginBottom: '5%'
                            }}>
                        <Typography variant='body1' style={{color: "#E0F2F1"}}>
                            <FormattedMessage id='about.third.button.text'
                                              defaultMessage="Message Us"/>
                        </Typography>
                    </Button>
                </NavLink>


            </Grid>
            <br/>


        </GradientContainer>
    )


}