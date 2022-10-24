import React from "react";
import Logo from "../Logo/Logo";
import "./Layout.css";

const Layout = ({children, footer, logo}) => {
    return (
        <section>
            <div className="container">
                <div className="wrapper-form">
                    {logo}
                    {children}
                </div>
            </div>
            {footer}
        </section>
    )
}

export default Layout;