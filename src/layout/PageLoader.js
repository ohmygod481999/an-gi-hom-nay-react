import React from "react";

function PageLoader() {
    return (
        <div>
            <div className="bg-primary d-flex align-items-center justify-content-center vh-100 index-page">
                <div className="text-center">
                    <img src="img/logo.png" alt="" />
                    <br />
                    <div className="spinner" />
                </div>
            </div>
        </div>
    );
}

export default PageLoader;
