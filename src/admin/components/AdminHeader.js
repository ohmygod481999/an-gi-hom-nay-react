import React from "react";
import { useTitle } from "../../utils/hooks/useTitle";

function AdminHeader({ title }) {
    useTitle(title);

    return (
        <div className="bg-primary p-3">
            <div className="text-white">
                <div className="title d-flex align-items-center">
                    <a className="toggle" href="#">
                        <span />
                    </a>
                    <h4 className="font-weight-bold m-0 pl-5">{title}</h4>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
