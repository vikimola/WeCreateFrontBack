import React from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import {FormattedMessage} from "react-intl";
import {Grid, useMediaQuery} from "@mui/material";

export default function Technologies(props) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const GradientContainer = props.bgGradient

    const logoReact = require("../image/technology/react.png")
    const logoHtmlJsCss = require("../image/technology/html_js_css.png")
    const logoDj = require("../image/technology/django2.png")
    const logoMUI = require("../image/technology/mui.png")
    const logoGit = require("../image/technology/git.png")
    const logoPy = require("../image/technology/python.png")
    const logoTs = require("../image/technology/typescript.png")
    const logoSQL = require("../image/technology/mySQL.png")

    return (
        <GradientContainer>

            <Header/>

            <div style={{height: '5rem'}}>
            </div>

            <Grid container className="tech-title">
                <Typography variant='h3'>
                    <FormattedMessage id='tech.title'
                                      defaultMessage="TECHNOLOGIES"/>
                </Typography>
                <br/>
                <div className="tech-title-description" style={{textAlign: 'center'}}>
                    <Typography variant='body1'>
                        <FormattedMessage id='tech.description' defaultMessage=""/>
                    </Typography>
                </div>
            </Grid>

            <br/>
            <br/>

            <Grid container className="tech-container">
                <Grid container item xs={12} md={12} className="tech-top">
                    <Grid container item xs={12} md={6} className="tech-top-first">

                        <div className="tech-item">
                            <br/>
                            <div className="tech-img-container">
                                <img className="tech-img" src={logoReact} alt="logo2"/>
                            </div>
                            <br/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.react.title'
                                                  defaultMessage="React"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.react.description'
                                                  defaultMessage="React is a JavaScript library used for building user interfaces, known for it component-based architecture, which promotes reusability and maintainability of UI elements. It efficiently updates the user interface by selectively rendering only the parts of the page that have changed, leading to improved performance. React has a vibrant ecosystem and is widely used for building modern web and mobile applications."/>
                            </Typography>
                        </div>

                        <div className="tech-item">
                            <br/>
                            <br/>
                            <br/>
                            <img className="tech-img" src={logoMUI} alt="logo2"/>
                            <br/>
                            <br/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.mui.title'
                                                  defaultMessage="Material UI"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.mui.description'
                                                  defaultMessage="    Material-UI (MUI) is a popular open-source library for React that provides a wide
                                range
                                of
                                pre-designed
                                and customizable UI components, following Google's Material Design principles, to
                                help
                                developers
                                create
                                modern and visually appealing web applications with ease. Its robust theming and
                                styling
                                capabilities
                                make it a valuable tool for maintaining consistent and attractive designs throughout
                                React
                                projects."/>
                            </Typography>
                        </div>

                    </Grid>
                    <Grid container item xs={12} md={6} className="tech-top-second">

                        <div className="tech-item">
                            <br/>
                            <img className="tech-img" src={logoDj} alt="logo2"/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.django.title'
                                                  defaultMessage="Django"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.django.description'
                                                  defaultMessage="
                                Django is a high-level Python web framework that simplifies the process of building
                                robust,
                                scalable,
                                and secure web applications. It follows the 'batteries-included' philosophy, providing a
                                comprehensive
                                set of tools and libraries for handling common web development tasks such as database
                                management,
                                authentication, and URL routing. With its well-structured and customizable architecture,
                                Django is a
                                popular choice among developers for creating versatile web applications quickly and
                                efficiently."/>
                            </Typography>
                        </div>


                        <div className="tech-item">
                            <br/>
                            <br/>
                            <img className="tech-img" src={logoHtmlJsCss} alt="logo2"/>
                            <br/>
                            <br/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.htmljscss.title'
                                                  defaultMessage="HTML, JavaScript, CSS"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.html.description'
                                                  defaultMessage="  HTML is a markup language used for creating the structure and content of web pages,
                                defining
                                elements
                                like headings, paragraphs, links, and images."/>

                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.js.description'
                                                  defaultMessage="      JavaScript is a versatile and widely used scripting language for web development,
                                enabling
                                interactive
                                and dynamic functionality within web applications."/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.css.description'
                                                  defaultMessage="  CSS is a stylesheet language used to define the presentation and styling of HTML
                                elements,
                                controlling
                                aspects like layout, color, and typography in web design."/>
                            </Typography>
                        </div>

                    </Grid>
                </Grid>

                <Grid container item xs={12} md={12} className="tech-bottom">
                    <Grid container item xs={12} md={6} className="tech-bottom-first">

                        <div className="tech-item">
                            <br/>
                            <br/>
                            <img className="tech-img" src={logoTs} alt="logo2"/>
                            <br/>
                            <br/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.ts.title'
                                                  defaultMessage="TypeScript"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.ts.description'
                                                  defaultMessage="   TypeScript is a statically typed superset of JavaScript that enhances code quality and
                                maintainability
                                by adding type checking and interfaces, making large-scale JavaScript development more
                                robust"/>
                            </Typography>
                        </div>

                        <div className="tech-item">
                            <br/>
                            <br/>
                            <img className="tech-img" src={logoPy} alt="logo2"/>
                            <br/>
                            <br/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.py.title'
                                                  defaultMessage="Python"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.py.description'
                                                  defaultMessage="  Python is a high-level, versatile programming language known for its readability and
                                ease of
                                use,
                                suitable for various applications. With a vast standard library and a thriving
                                community,
                                Python
                                is
                                widely used for web development, data analysis, artificial intelligence, and automation.
                            "/>
                            </Typography>
                        </div>

                    </Grid>
                    <Grid container item xs={12} md={6} className="tech-bottom-second">

                        <div className="tech-item">
                            <br/>
                            <br/>
                            <img className="tech-img" src={logoSQL} alt="logo2"/>
                            <br/>
                            <br/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.sql.title'
                                                  defaultMessage="MySQL"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.sql.description'
                                                  defaultMessage="   MySQL is an open-source relational database management system known for its scalability,
                                reliability,
                                and performance, making it a widely used choice for storing and managing structured data
                                in
                                various
                                applications."/>
                            </Typography>
                        </div>

                        <div className="tech-item">
                            <br/>
                            <br/>
                            <img className="tech-img" src={logoGit} alt="logo2"/>
                            <br/>
                            <Typography variant='h4'>
                                <FormattedMessage id='tech.git.title'
                                                  defaultMessage="GitHub"/>
                            </Typography>
                            <br/>
                            <Typography variant="body1" className="tech-description">
                                <FormattedMessage id='tech.git.description'
                                                  defaultMessage="     Git is a distributed version control system that allows developers to track changes,
                                collaborate
                                on
                                code, and maintain version history efficiently. It's a fundamental tool for managing
                                software
                                development projects and facilitating collaboration among team members.
                            "/>
                            </Typography>

                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>

        </GradientContainer>
    )


}