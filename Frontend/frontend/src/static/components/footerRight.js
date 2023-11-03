import {Link, useMediaQuery} from "@mui/material";
import React from "react";
import {FormattedMessage} from "react-intl";
import Typography from "@mui/material/Typography";


export default function FooterRight() {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <div>
            <Typography variant="body1" className="footer-right">
                <Link href='/termeni-conditii'
                      rel="noopener noreferrer" color="inherit" sx={{textDecoration: 'none'}}>
                    <FormattedMessage id='footer.terms.conditions'
                                      defaultMessage="Terms and Conditions"
                                      className="footer-grid-text"/>
                </Link>

                <Link href='/cookies'
                      rel="noopener noreferrer" color="inherit" sx={{textDecoration: 'none'}}>
                    <FormattedMessage id='footer.cookies'
                                      defaultMessage="Cookies"
                                      className="footer-grid-text"/>
                </Link>

                <Link href='/politica-confidentialitate'
                      rel="noopener noreferrer" color="inherit" sx={{textDecoration: 'none'}}>
                    <FormattedMessage id='footer.privacy.policy'
                                      defaultMessage="Privacy Policy"
                                      className="footer-grid-text"/>
                </Link>

                <Link href='https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO'
                      target="_blank" rel="noopener noreferrer" color="inherit" sx={{textDecoration: 'none'}}>
                    SOL
                </Link>

                <Link href='https://anpc.ro/'
                      target="_blank" rel="noopener noreferrer" color="inherit" sx={{textDecoration: 'none'}}>
                    ANPC
                </Link>
            </Typography>
            <div style={{margin: '0.5rem 0'}}></div>


            {isSmallScreen && <br/>}

        </div>

    )

}
