import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_AUTH } from "../utils/apollo/entities/auth/operations/auth.queries";

function MainNav() {
    const { data } = useQuery(GET_AUTH);
    const isAdmin = data.auth.isAdmin;

    return (
        <nav id="main-nav">
            <ul className="second-nav">
                {isAdmin && (
                    <li>
                        <a href="#">
                            <i className="feather-link mr-2" /> Admin
                        </a>
                        <ul>
                            <li>
                                <Link to="/admin/dish">Quản lý bữa ăn</Link>
                            </li>
                            <li>
                                <a href="#">Quản lý nhà hàng</a>
                                <ul>
                                    <li>
                                        <Link to="/admin/restaurant/list">
                                            Danh sách nhà hàng
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/restaurant/create">
                                            Tạo mới nhà hàng
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Quản lý món ăn</a>
                                <ul>
                                    <li>
                                        <Link to="/admin/food/list">
                                            Danh sách món
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/food/create">
                                            Tạo mới món
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                )}
                <li>
                    <Link to="/">
                        <i className="feather-home mr-2" /> Homepage
                    </Link>
                </li>
                <li>
                    <Link to="/my-dish">
                        <i className="feather-map-pin mr-2" /> Món của tôi
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <i className="feather-user mr-2" /> Profile
                    </Link>
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
