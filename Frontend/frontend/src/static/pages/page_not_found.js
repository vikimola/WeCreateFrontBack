import React from "react";
import Header from "../components/header";
import {Button, FormControl, FormHelperText, Grid, TextField, useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";
import {NavLink} from "react-router-dom";
import computer from "../image/services/computer.png";
import four_0_4 from "../image/page_not_found/404.png";
import outreachDark from "../image/contact/outreach.png";
import outreachLight from "../image/contact/outreach2.png";
import four_0_4_dark from "../image/page_not_found/404_3.png";
import four_0_4_light from "../image/page_not_found/404.png";

export default function Page_not_found(props) {
    const GradientContainer = props.bgGradient
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const four_0_4_light = require("../image/page_not_found/404.png")
    const four_0_4_dark = require("../image/page_not_found/404_3.png")

    return (
        <GradientContainer>
            <Header/>

            <div style={{height: '4rem'}}>
            </div>


            <Grid container className='page-not-found'>
                <div className='page-not-found-div'>

                    {props.isDarkTheme && isSmallScreen &&
                        <img className="page-not-found-img" src={four_0_4_dark} style={{width: '85%'}} alt="fourImg"/>}
                    {props.isDarkTheme && !isSmallScreen &&
                        <img className="page-not-found-img" src={four_0_4_dark} style={{width: '40%'}} alt="fourImg"/>}
                    {!props.isDarkTheme && isSmallScreen &&
                        <img className="page-not-found-img" src={four_0_4_light} style={{width: '70%'}} alt="fourImg"/>}
                    {!props.isDarkTheme && !isSmallScreen &&
                        <img className="page-not-found-img" src={four_0_4_light} style={{width: '30%'}} alt="fourImg"/>}


                    <br/>

                    <Typography variant="h4" style={{textAlign: 'center'}}>
                        <FormattedMessage id='page.not.found.description1'
                                          defaultMessage="Newsletter Unsubscribe"/>
                    </Typography>
                    <br/>

                    <Typography variant="h5" style={{textAlign: 'center'}}>
                        <FormattedMessage id='page.not.found.description2'
                                          defaultMessage="Newsletter Unsubscribe"/>
                    </Typography>

                    <br/>
                    <br/>



                </div>
            </Grid>


        </GradientContainer>
    )


}