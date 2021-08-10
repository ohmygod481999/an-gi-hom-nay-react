import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
    return (
        <nav id="main-nav">
            <ul className="second-nav">
                <li>
                    <Link to="/">
                        <i className="feather-home mr-2" /> Homepage
                    </Link>
                </li>
                <li>
                    <a href="map.html">
                        <i className="feather-map-pin mr-2" /> Live Map
                    </a>
                </li>
                <li>
                    <Link to="/profile">
                        <i className="feather-user mr-2" /> Profile
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <i className="feather-link mr-2" /> Navigation Link
                        Example
                    </a>
                    <ul>
                        <li>
                            <a href="#">Link Example 1</a>
                            <ul>
                                <li>
                                    <a href="#">Link Example 1.1</a>
                                    <ul>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Link Example 1.2</a>
                                    <ul>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Link</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Link Example 2</a>
                        </li>
                        <li>
                            <a href="#">Link Example 3</a>
                        </li>
                        <li>
                            <a href="#">Link Example 4</a>
                        </li>
                        <li data-nav-custom-content>
                            <div className="custom-message">
                                You can add any custom content to your
                                navigation items. This text is just an example.
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="bottom-nav">
                <li className="email">
                    <a className="text-danger" href="home.html">
                        <p className="h5 m-0">
                            <i className="feather-home text-danger" />
                        </p>
                        Home
                    </a>
                </li>
                <li className="github">
                    <a href="faq.html">
                        <p className="h5 m-0">
                            <i className="feather-message-circle" />
                        </p>
                        FAQ
                    </a>
                </li>
                <li className="ko-fi">
                    <a href="contact-us.html">
                        <p className="h5 m-0">
                            <i className="feather-phone" />
                        </p>
                        Help
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;
