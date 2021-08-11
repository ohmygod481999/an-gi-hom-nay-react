import React from "react";
import ActionFooter from "./ActionFooter";
import MainNav from "./MainNav";

function MainLayout(props) {
    return (
        <div>
            <div className="osahan-home-page">
                {props.children}
                {!props.isAdmin ? <ActionFooter /> : null}
            </div>
            <MainNav />
        </div>
    );
}

export default MainLayout;
