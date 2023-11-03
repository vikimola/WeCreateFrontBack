import {Grid} from "@mui/material";
import React from "react";
import FooterMiddle from "./footerMiddle";
import FooterRight from "./footerRight";
import FooterLeft from "./footerLeft";

export default function Footer(props) {

    return (
        <div style={{background: props.backgroundColor}}>
            <Grid container className="footer" spacing={2}>

                <Grid item xs={12} md={4}>
                    <FooterLeft  isDarkTheme={props.isDarkTheme}/>
                </Grid>

                <Grid item xs={12} md={5}>
                    <FooterMiddle toggleTheme={props.toggleTheme}/>

                </Grid>

                <Grid item xs={12} md={3}>
                    <FooterRight/>

                </Grid>

            </Grid>
        </div>
    )
}