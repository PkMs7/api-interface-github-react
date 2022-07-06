import React from "react";

function Layout({ children }) {

    return (
        <div>
            <header>header</header>
            { children }
        </div>
    );
}

export default Layout;