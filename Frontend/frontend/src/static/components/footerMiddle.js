import {Button, Link} from "@mui/material";
import React, {useContext} from "react";
import {FormattedMessage} from "react-intl";
import Typography from "@mui/material/Typography";
import ChangeLangButtons from "./changeLangButtons";
import {LanguageContext} from "./languageProvider";
import {BsToggleOff, BsToggleOn} from "react-icons/bs";


export default function FooterMiddle(props) {
    const {locale, changeLanguage} = useContext(LanguageContext);

    const handleLanguageChange = (newLocale) => {
        changeLanguage(newLocale);
    };
    return (

        <Typography variant="body1" component={'span'} className='footer-middle' style={{textAlign: 'center'}}>

            <div className="footer-left-div">
                <Typography variant="body1">
                    <FormattedMessage id='footer.toggle.theme'
                                      defaultMessage="Theme:"
                    />
                </Typography>
                <Button onClick={props.toggleTheme} sx={{fontSize: '2rem'}}>
                    {props.isDarkTheme ? <BsToggleOn/> : <BsToggleOff/>}
                </Button>
            </div>

            <div style={{margin: '0.4rem 0'}}></div>

            <div className="footer-left-div">
                <ChangeLangButtons handleLanguageChange={handleLanguageChange} locale={locale}/>
            </div>

            <div style={{margin: '0.5rem 0'}}></div>

            <Link href='mailto: wecreate.designs.srl@gmail.com'
                  target="_blank" rel="noopener" color="inherit" sx={{textDecoration: 'none'}}>
                wecreate.designs.srl@gmail.com
            </Link>
                       <div style={{margin: '0.5rem 0'}}></div>

        </Typography>


    )
}
