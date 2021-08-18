import React from "react";
import { useTitle } from "../utils/hooks/useTitle";

function Header1({ title }) {
    useTitle(title);
    return (
        <div class="bg-light border-bottom p-3">
            <a class="toggle toggle-2" href="#">
                <span></span>
            </a>
            <h4 class="font-weight-bold m-0">{title}</h4>
        </div>
    );
}

export default Header1;
