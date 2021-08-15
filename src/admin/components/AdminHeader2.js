import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useTitle } from "../../utils/hooks/useTitle";

function AdminHeader2({ title, extraLink }) {
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
                style={{
                    cursor: "pointer",
                }}
            >
                <i className="feather-chevron-left" /> Back
            </a>
            <h2 className="font-weight-bold m-0 text-white pt-3">
                {title}{" "}
                {extraLink && (
                    <Link to={extraLink.path}>
                        <span
                            style={{
                                fontSize: 15,
                            }}
                            className="badge badge-primary"
                        >
                            {extraLink.title}
                        </span>
                    </Link>
                )}
            </h2>
        </div>
    );
}

export default AdminHeader2;
