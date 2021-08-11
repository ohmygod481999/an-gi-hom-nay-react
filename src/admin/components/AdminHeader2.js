import React from "react";
import { useHistory } from "react-router-dom";
import { useTitle } from "../../utils/hooks/useTitle";

function AdminHeader2({ title }) {
    useTitle(title);
    const history = useHistory();

    return (
        <div className="bg-primary border-bottom px-3 pt-3 pb-5">
            <a className="toggle togglew toggle-2" href="#">
                <span />
            </a>
            <a
                className="text-white font-weight-bold"
                onClick={() => {
                    history.goBack();
                }}
            >
                <i className="feather-chevron-left" /> Back
            </a>
            <h2 className="font-weight-bold m-0 text-white pt-3">{title}</h2>
        </div>
    );
}

export default AdminHeader2;
