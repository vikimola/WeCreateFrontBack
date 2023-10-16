import React from "react";
import Header from "../components/header";
import {Grid, useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";

export default function PageNotFound(props) {
    const GradientContainer = props.bgGradient
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const notFoundLight = require("../image/pageNotFound/404Light.png")
    const notFoundDark = require("../image/pageNotFound/404Dark.png")

    return (
        <GradientContainer>
            <Header/>

            <div style={{height: '4rem'}}>
            </div>


            <Grid container className='page-not-found'>
                <div className='page-not-found-div'>

                    {props.isDarkTheme && isSmallScreen &&
                        <img className="page-not-found-img" src={notFoundDark} style={{width: '85%'}} alt="fourImg"/>}
                    {props.isDarkTheme && !isSmallScreen &&
                        <img className="page-not-found-img" src={notFoundDark} style={{width: '40%'}} alt="fourImg"/>}
                    {!props.isDarkTheme && isSmallScreen &&
                        <img className="page-not-found-img" src={notFoundLight} style={{width: '70%'}} alt="fourImg"/>}
                    {!props.isDarkTheme && !isSmallScreen &&
                        <img className="page-not-found-img" src={notFoundLight} style={{width: '30%'}} alt="fourImg"/>}


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