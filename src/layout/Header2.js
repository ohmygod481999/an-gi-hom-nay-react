import React from "react";
import { useHistory } from "react-router-dom";
import { useTitle } from "../utils/hooks/useTitle";

function Header2({ title }) {
    const history = useHistory();
    useTitle(title);
    return (
        <div className="bg-light border-bottom p-3">
            <div className="forgot-page">
                <a className="toggle toggle-2" href="#">
                    <span />
                </a>
                <a
                    className="text-primary font-weight-bold"
                    href="home.html"
                    onClick={(e) => {
                        e.preventDefault();
                        history.goBack();
                    }}
                >
                    <i className="feather-chevron-left" /> Back
                </a>
            </div>
            <div className="d-flex align-items-center pt-3">
                <h2 className="font-weight-bold m-0">{title}</h2>
                <a className="small text-dark ml-auto" href="#">
                    20 places
                </a>
            </div>
        </div>
    );
}

export default Header2;
