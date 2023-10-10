import React from "react";
import Header from "../components/header";
import Page1 from "../components/page1";

export default function Home(props) {
    return (
        <div className="home">
            <Header/>

            {
                props.isDarkTheme ?
                    <Page1 bgGradient={props.gradientContainerDark} isDarkTheme={props.isDarkTheme}/>
                    :
                    <Page1 bgGradient={props.gradientContainerLight} isDarkTheme={props.isDarkTheme}/>
            }

        </div>
    )


}