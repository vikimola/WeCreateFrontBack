import React from "react";
import Header from "../components/header";
import {FormattedMessage} from "react-intl";
import Typography from "@mui/material/Typography";

export default function Cookies(props) {
    const GradientContainer = props.bgGradient

    return (
        <GradientContainer>
            <Header/>
            <div style={{height: '5rem'}}>
            </div>
            <div className="cookies-content">
                <Typography variant='h3'  className="cookies-title"  >
                    <FormattedMessage id='cookies.title'
                                      defaultMessage="Cookies"/>
                </Typography>
                <br/>

                <Typography variant='h4'>
                    <FormattedMessage id='cookies.what.are.title'
                                      defaultMessage="What are cookies?"/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.what.are.content1'/>
                    <br/>
                    <br/>
                    <FormattedMessage id='cookies.what.are.content2'/>
                    <br/>
                    <br/>
                    <FormattedMessage id='cookies.what.are.content3'/>
                </Typography>
                <br/>
                <br/>
                <Typography variant='h4'>
                    <FormattedMessage id='cookies.disable.title'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.disable.description'/>
                </Typography>
                <br/>
                <br/>
                <Typography variant='h4'>
                    <FormattedMessage id='cookies.use.title'
                                      defaultMessage="Disabling Cookie Modules"/>
                </Typography>
                <ol>
                    <li><Typography variant='h6'>
                        <FormattedMessage id='cookies.use.title1'
                                          defaultMessage="Disabling Cookie Modules"/>
                    </Typography>
                    </li>
                    <Typography variant='body1'>
                        <FormattedMessage id='cookies.use.description1'/>
                    </Typography>
                    <br/>
                    <br/>
                    <li>
                        <Typography variant='h6'>
                            <FormattedMessage id='cookies.use.title2'/>
                        </Typography>
                    </li>
                    <Typography variant='body1'>
                        <FormattedMessage id='cookies.use.description2'/>
                    </Typography>
                    <br/>
                    <br/>
                    <li>
                        <Typography variant='h6'>
                            <FormattedMessage id='cookies.use.title3'/>
                        </Typography>
                    </li>
                    <Typography variant='body1'>
                        <FormattedMessage id='cookies.use.description3'/>
                    </Typography>
                    <br/>
                    <br/>
                    <li>
                        <Typography variant='h6'>
                            <FormattedMessage id='cookies.use.title4'/>
                        </Typography>
                    </li>
                    <Typography variant='body1'>
                        <FormattedMessage id='cookies.use.description4'/>
                    </Typography>
                </ol>
                <br/>
                {/*-------*/}
                <Typography variant='h4'>
                    <FormattedMessage id='cookies.third.party.title'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.third.party.description1'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.third.party.description2'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.third.party.description3'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.third.party.description4'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.third.party.description5'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.third.party.description6'/>
                </Typography>
                <br/>
                <Typography variant='body1'>
                    <FormattedMessage id='cookies.third.party.description7'/>
                </Typography>
                <br/>
                <br/>
            </div>
        </GradientContainer>

    )

}