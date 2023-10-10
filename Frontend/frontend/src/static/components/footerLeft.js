import {Button, Link} from "@mui/material";
import React, {useContext} from "react";
import {FormattedMessage} from "react-intl";
import Typography from "@mui/material/Typography";
import ChangeLangButtons from "./changeLangButtons";
import {BsToggleOff, BsToggleOn} from "react-icons/bs";
import {LanguageContext} from "./languageProvider";
import {FaFacebookF, FaInstagram} from "react-icons/fa";


export default function FooterLeft(props) {
    const companyLogo = require("../image/page1/img_1.png")

    return (
        <div className="footer-left">
            <div className="footer-left-div">
                <img className="company-logo-footer" src={companyLogo} alt="logo"/>
                <Typography variant="body1">
                    <FormattedMessage id='footer.company.name'
                                      defaultMessage="WECREATE DESIGNS S.R.L."
                    />
                </Typography>
            </div>

            <div className="footer-grid-social-icons">
                <Link href='https://www.facebook.com/profile.php?id=100089803748309'
                      target="_blank" rel="noopener noreferrer"
                      sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '1em 0.5em',
                          fontSize: '20px',
                          color: '#F5F5F5',
                          '&:hover': {
                              color: '#00BFA5'
                          },
                      }}>
                    < FaFacebookF sx={{fontSize: 'inherit'}}/>
                </Link>

                <Link href='https://instagram.com/we.create.designs?igshid=NTc4MTIwNjQ2YQ=='
                    // target="_blank" rel="noopener" sx={{textDecoration: 'none'}} sx={{
                      target="_blank" rel="noopener noreferrer" sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '1em 0.5em',
                    fontSize: '24px',
                    color: '#F5F5F5',
                    '&:hover': {
                        color: '#00BFA5', // Change to desired hover color
                    },
                }}>
                    <FaInstagram sx={{fontSize: 'inherit'}}/>
                </Link>
            </div>

        </div>

    );
}
