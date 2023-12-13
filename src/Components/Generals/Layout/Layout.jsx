// React
import React from "react";
// Components
// import Footer from "./footer";
import Navbar from "./NavBar/NavBar";
// import Footer from "./Footer/Footer";

export default function BaseLayout(props) {
    const { children } = props
    return (
        <React.Fragment>
            <Navbar/>
            { children }
            {/* <Footer/> */}
        </React.Fragment>
    )
}