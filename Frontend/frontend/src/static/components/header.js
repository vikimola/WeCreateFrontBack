import {Box, Menu, styled, useMediaQuery} from "@mui/material";
import companyLogo from "../image/page1/WeCreateLogo.png";
import {FormattedMessage} from "react-intl";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import logoText from "../image/header/logoText.png";
import { useTheme } from '@material-ui/core/styles';


// FormattedMessage.propTypes = {children: PropTypes.node};
export default function Header() {
    const logoIcon = require("../image/header/logoIcon.png");
    const logoText = require("../image/header/logoText.png");
    const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(500));

    const isSmallScreen = () => {
    const theme = useTheme();

    const width = window.innerWidth;
    // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return width <= parseInt(theme.breakpoints.values.sm) && width >= 500;
};
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const CustomMenuItem = styled('div')(({theme}) => ({
        color: theme.palette.primary.contrastText,
        // backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(2),
        // textDecoration: 'none',
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        width: '40vw',
    }));

    const CustomMenuItem2 = styled('div')(({theme}) => ({
        color: theme.palette.primary.contrastText,
        padding: '1rem'
    }));


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar className="header">
                <Toolbar>
                    {isExtraSmallScreen && <NavLink style={{flexGrow: 1}}
                                                    className="header-logo-navlink"
                                                    to="/">
                        <div className="header-logos">
                            {/*<img className="header-logo-icon-small" src={companyLogo} alt="logo"/>*/}
                            <img className="header-logo-text-extra-small" src={logoText} alt="logo"/>
                        </div>

                    </NavLink>}

                    {isSmallScreen &&
                        <NavLink style={{flexGrow: 1}}
                                 className="header-logo-navlink"
                                 to="/"
                        >
                            <div className="header-logos">
                                {/*<img className="header-logo-icon-small" src={companyLogo} alt="logo"/>*/}
                                <img className="header-logo-text-small" src={logoText} alt="logo"/>
                            </div>

                        </NavLink>
                        // )
                        // :
                        // (<NavLink style={{flexGrow: 1}}
                        //           className="header-logo-navlink"
                        //           to="/"
                        // >
                        //     <div className="header-logos">
                        //         {/*<img className="header-logo-icon-big" src={companyLogo} alt="logo"/>*/}
                        //         <img className="header-logo-text-big" src={logoText} alt="logo"/>
                        //     </div>
                        // </NavLink>)
                    }


                    {/*<NavLink*/}
                    {/*    className="header-logo-navlink"*/}
                    {/*    style={{flexGrow: 1}}*/}
                    {/*    to="/"*/}
                    {/*>*/}
                    {/*    <Typography variant="h4" component="div"*/}
                    {/*                sx={{fontWeight: '600', color: '#F5F5F5'}}>*/}
                    {/*        WeCreate*/}
                    {/*    </Typography>*/}
                    {/*</NavLink>*/}


                    {isSmallScreen ? (<IconButton
                            onClick={handleMenuClick}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ml: 2, color: '#F5F5F5'}}
                        >
                            <MenuIcon/>
                        </IconButton>)
                        :
                        (<div className='header-expanded-items'>
                            <NavLink
                                className="header-item-navlink"
                                to="/servicii">
                                <CustomMenuItem2>
                                    <FormattedMessage id="header.services"
                                                      defaultMessage="Services"/>

                                </CustomMenuItem2>
                            </NavLink>
                            <NavLink
                                className="header-item-navlink"
                                to="/tehnologii">
                                <CustomMenuItem2>
                                    <FormattedMessage id="header.tech"
                                                      defaultMessage="Technologies"/>
                                </CustomMenuItem2>
                            </NavLink>
                            <NavLink
                                className="header-item-navlink"
                                to="/despre"
                            >
                                <CustomMenuItem2>
                                    <FormattedMessage id="header.about"
                                                      defaultMessage="About"/>
                                </CustomMenuItem2>
                            </NavLink>
                            <NavLink
                                className="header-item-navlink"
                                to="/contact"
                            >
                                <CustomMenuItem2>
                                    <FormattedMessage id="header.contact"
                                                      defaultMessage="Contact"/>
                                </CustomMenuItem2>
                            </NavLink>

                        </div>)
                    }


                </Toolbar>
            </AppBar>

            <Menu className='header-dropdown-items' anchorEl={anchorEl} open={Boolean(anchorEl)}
                  onClose={handleMenuClose}>
                <NavLink
                    className="header-item-navlink"
                    to="/servicii"
                >
                    <CustomMenuItem className='header-dropdown-item' onClick={handleMenuClose}>
                        <FormattedMessage id="header.services"
                                          defaultMessage="Services"/>
                    </CustomMenuItem>
                </NavLink>
                <NavLink
                    className="header-item-navlink"
                    to="/tehnologii"
                >
                    <CustomMenuItem className='header-dropdown-item'
                                    onClick={handleMenuClose}>
                        <FormattedMessage id="header.tech"
                                          defaultMessage="Technologies"/>
                    </CustomMenuItem>
                </NavLink>
                <NavLink
                    className="header-item-navlink"
                    to="/despre"
                >
                    <CustomMenuItem className='header-dropdown-item' onClick={handleMenuClose}>
                        <FormattedMessage id="header.about"
                                          defaultMessage="About"/>
                    </CustomMenuItem>
                </NavLink>
                <NavLink
                    className="header-item-navlink"
                    to="/contact"
                >
                    <CustomMenuItem className='header-dropdown-item' onClick={handleMenuClose}>
                        <FormattedMessage id="header.contact"
                                          defaultMessage="Contact"/>
                    </CustomMenuItem>
                </NavLink>

            </Menu>
        </Box>

    )
}