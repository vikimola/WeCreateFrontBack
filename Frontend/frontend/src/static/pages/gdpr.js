import React from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";

export default function Gdpr(props) {
    const GradientContainer = props.bgGradient


    return (
        <GradientContainer>
            <Header/>
            <div style={{height: '5rem'}}>
            </div>
            <div className='gdpr-content'>
                <Typography component={'span'} variant='h3' className='gdpr-title'>
                    <FormattedMessage id='gdpr.title'
                                      defaultMessage="Privacy policy"/>
                </Typography>

                <br/>

                <Typography component={'span'} variant='h4'>
                    <FormattedMessage id='gdpr.info.collect.title'
                                      defaultMessage="Collection of Personal Information"/>
                </Typography>
                <br/>
                <br/>
                <Typography component={'span'} variant='body1'>
                    <FormattedMessage id='gdpr.info.collect.1'
                                      defaultMessage="Ensuring confidentiality for the visitors of our website is of utmost importance to us, and we are committed to safeguarding it. We adhere to the 2018 European Data Protection Regulation. This policy outlines how we will handle your personal information."/>
                    <br/>
                    <br/>
                    <FormattedMessage  id='gdpr.info.collect.2'
                                      defaultMessage="By giving your consent to the use of cookies in accordance with the terms of this policy when you visit our website for the first time, you allow us to use cookies every time you visit our website."/>
                    <br/>
                    <br/>
                    <FormattedMessage  id="gdpr.info.collect.3.title"
                                      defaultMessage="The following types
                                      of personal information can be collected,
                                      stored, and used:"/>
                    <ul>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.email"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.name"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.address"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.phone"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.gender"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.dob"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.photoVideo"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.computerInfo"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.visitInfo"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.generatedInfo"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.emailInfo"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.3.anyInfo"/>
                        </li>
                    </ul>

                    <FormattedMessage id="gdpr.info.collect.4.title"
                                      defaultMessage="We collect data in the following situations:"/>

                    <ul>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.4.phone"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.4.visit"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.4.profile"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.4.subscribe"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.4.review"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.collect.4.social"/>
                        </li>
                    </ul>

                    <FormattedMessage id="gdpr.info.collect.disclosing"
                                      defaultMessage="Before disclosing another person's personal data, you must obtain consent from that individual for both disclosure and processing of personal data in accordance with this policy."/>

                    <br/>
                    <br/>

                    <FormattedMessage id="gdpr.info.use.5.title"
                                      defaultMessage="We collect data in the following situations:"/>

                    <ul>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.description"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.purchase"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.delivery"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.manage"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.personalise"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.email"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.analyze"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.improve"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.security"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.complaints"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.use.5.statistics"/>
                        </li>
                    </ul>
                    <FormattedMessage id="gdpr.info.use.5.consent"
                                      defaultMessage="Without your explicit consent, we will not provide your personal information to third parties for direct marketing by these third parties or any other third party."/>


                </Typography>
                <br/>
                <br/>
                <br/>

                <Typography component={'span'} variant='h4'>
                    <FormattedMessage id='gdpr.info.disclosure.title'
                                      defaultMessage="Disclosure of Personal Information"/>
                </Typography>
                <br/>
                <br/>

                <Typography component={'span'} variant='body1'>
                    <FormattedMessage id='gdpr.info.share.description'
                                      defaultMessage="We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers, or subcontractors as reasonably necessary for the purposes set out in this policy."/>
                    <br/>
                    <br/>

                    <FormattedMessage id='gdpr.info.share.title'/>

                    <ul>
                        <li>
                            <FormattedMessage id="gdpr.info.share.6.law1"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.share.6.law2"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.share.6.law3"/>
                        </li>
                        <li>
                            <FormattedMessage id="gdpr.info.share.6.law4"/>
                        </li>
                    </ul>
                    <FormattedMessage id='gdpr.info.share.third.party'/>

                </Typography>
                <br/>
                <br/>
                <br/>

                <Typography component={'span'} variant='h4'>
                    <FormattedMessage id='gdpr.info.share.7.title'/>
                </Typography>


                <Typography component={'span'} variant='body1'>
                    <ul>
                        <li>
                            <FormattedMessage id="gdpr.info.share.7.stock"/>
                        </li>
                        <br/>
                        <li>
                            <FormattedMessage id="gdpr.info.share.7.law"/>
                        </li>
                        <br/>
                        <li>
                            <FormattedMessage id="gdpr.info.share.7.accept"/>
                        </li>
                    </ul>
                    <br/>

                    <Typography component={'span'} variant='h4'>
                        <FormattedMessage id='gdpr.info.retention.title'/>
                    </Typography>
                    <Typography component={'span'} variant='body1'>
                        <ul>
                            <li>
                                <FormattedMessage id="gdpr.info.retention.8.policy"/>
                            </li>
                            <br/>
                            <li>
                                <FormattedMessage id="gdpr.info.retention.8.kept"/>
                            </li>
                            <br/>
                            <li>
                                <FormattedMessage id="gdpr.info.retention.8.retain"/>
                            </li>
                        </ul>
                        <ol>
                            <li>
                                <FormattedMessage id="gdpr.info.retention.8.retain.a"/>
                            </li>
                            <br/>
                            <li>
                                <FormattedMessage id="gdpr.info.retention.8.retain.b"/>
                            </li>
                            <br/>
                            <li>
                                <FormattedMessage id="gdpr.info.retention.8.retain.c"/>
                            </li>
                        </ol>
                    </Typography>
                    <br/>
                    <br/>


                    <Typography component={'span'} variant='h4'>
                        <FormattedMessage id='gdpr.info.security.title'
                                          defaultMessage=""/>
                    </Typography>
                    <Typography component={'span'} variant='body1'>

                        <ul>
                            <li>
                                <FormattedMessage id="gdpr.info.security.9.precautions"/>
                            </li>
                            <br/>
                            <li>
                                <FormattedMessage id="gdpr.info.security.9.store"/>
                            </li>
                            <br/>
                            <li>
                                <FormattedMessage id="gdpr.info.security.9.acknowledge"/>
                            </li>
                        </ul>
                    </Typography>
                    <br/>


                    <Typography component={'span'} variant='h4'>
                        <FormattedMessage id='gdpr.info.change.title'
                                          defaultMessage=""/>
                    </Typography>
                    <br/>
                    <br/>

                    <Typography component={'span'} variant='body1'>
                        <FormattedMessage id="gdpr.info.change.description"/>
                    </Typography>
                    <br/>
                    <br/>
                    <br/>


                    <Typography component={'span'} variant='h4'>
                        <FormattedMessage id='gdpr.info.third.party.title'
                                          defaultMessage=""/>
                    </Typography>
                    <br/>
                    <br/>

                    <Typography component={'span'} variant='body1'>
                        <FormattedMessage id="gdpr.info.third.party.description"/>
                    </Typography>
                    <br/>
                    <br/>
                    <br/>

                    <Typography component={'span'} variant='h4'>
                        <FormattedMessage id='gdpr.info.update.title'
                                          defaultMessage=""/>
                    </Typography>
                    <br/>
                    <br/>

                    <Typography component={'span'} variant='body1'>
                        <FormattedMessage id="gdpr.info.update.description"/>
                    </Typography>
                    <br/>
                    <br/>
                    <br/>

                    <Typography component={'span'} variant='h4'>
                        <FormattedMessage id='gdpr.info.cookie.title'
                                          defaultMessage=""/>
                    </Typography>
                    <br/>
                    <br/>

                    <Typography component={'span'} variant='body1'>
                        <FormattedMessage id="gdpr.info.cookie.description"/>
                    </Typography>
                    <br/>
                    <br/>
                    <br/>

                    <Typography component={'span'} variant='h4'>
                        <FormattedMessage id='gdpr.info.final.title'
                                          defaultMessage=""/>
                    </Typography>
                    <br/>
                    <br/>
                    <Typography component={'span'} variant='body1'>
                        <FormattedMessage id="gdpr.info.final.description"/>
                    </Typography>
                </Typography>
            </div>
            <br/>
            <br/>
        </GradientContainer>

    )


}