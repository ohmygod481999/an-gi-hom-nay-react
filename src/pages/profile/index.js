import { useQuery } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import { GET_AUTH } from "../../utils/apollo/entities/auth/operations/auth.queries";
import { auth } from "../../utils/firebase";

function Profile() {
    const { data } = useQuery(GET_AUTH);
    console.log(data.auth.user)
    const { displayName, email, emailVerified, photoURL } = data.auth.user;

    const history = useHistory();

    const signOutHandler = () => {
        auth.signOut();
        history.push("/login");
    };

    return (
        <MainLayout>
            <div className="bg-primary border-bottom px-3 pt-3 pb-5 d-flex align-items-center">
                <a className="toggle togglew toggle-2" href="#">
                    <span />
                </a>
                <h4 className="font-weight-bold m-0 text-white">Profile</h4>
            </div>
            {/* profile */}
            <div className="p-3 osahan-profile">
                <div className="bg-white rounded shadow mt-n5">
                    <div className="d-flex align-items-center border-bottom p-3">
                        <div className="left mr-3">
                            <img
                                style={{
                                    maxHeight: "50px",
                                }}
                                src={photoURL}
                                alt="avatar"
                                className="rounded-circle"
                            />
                        </div>
                        <div className="right">
                            <h6 className="mb-1 font-weight-bold">
                                {displayName}{" "}
                                {emailVerified ? (
                                    <i className="feather-check-circle text-success" />
                                ) : (
                                    <i className="feather-alert-circle text-danger" />
                                )}
                            </h6>
                            <p className="text-muted m-0 small">{email}</p>
                        </div>
                    </div>
                    <div className="osahan-credits d-flex align-items-center p-3 border-bottom">
                        <p className="m-0">Accounts Credits</p>
                        <h5 className="m-0 ml-auto text-primary">$52.25</h5>
                    </div>
                    <div className="osahan-credits d-flex align-items-center p-3">
                        <p
                            className="m-0"
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={signOutHandler}
                        >
                            Logout
                        </p>
                        <h5 className="m-0 ml-auto text-primary"></h5>
                    </div>
                </div>
                {/* profile-details */}
                <div className="bg-white rounded shadow mt-3 profile-details">
                    <a
                        data-toggle="modal"
                        data-target="#paycard"
                        className="d-flex w-100 align-items-center border-bottom p-3"
                    >
                        <div className="left mr-3">
                            <h6 className="font-weight-bold mb-1 text-dark">
                                Payment Cards
                            </h6>
                            <p className="small text-muted m-0">
                                Add a credit or debit card
                            </p>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right" />
                            </h6>
                        </div>
                    </a>
                    <a
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="d-flex w-100 align-items-center border-bottom p-3"
                    >
                        <div className="left mr-3">
                            <h6 className="font-weight-bold mb-1 text-dark">
                                Address
                            </h6>
                            <p className="small text-muted m-0">
                                Add or remove a delivery address
                            </p>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right" />
                            </h6>
                        </div>
                    </a>
                    <div className="d-flex align-items-center border-bottom p-3">
                        <div className="left mr-3">
                            <h6 className="font-weight-bold mb-1">
                                Refer Friends
                            </h6>
                            <p className="small text-primary m-0">
                                Get $10.00 FREE
                            </p>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right" />
                            </h6>
                        </div>
                    </div>
                    <a
                        href="faq.html"
                        className="d-flex w-100 align-items-center border-bottom px-3 py-4"
                    >
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark">
                                <i className="feather-truck bg-danger text-white p-2 rounded-circle mr-2" />{" "}
                                Delivery Support
                            </h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right" />
                            </h6>
                        </div>
                    </a>
                    <a
                        href="contact-us.html"
                        className="d-flex w-100 align-items-center border-bottom px-3 py-4"
                    >
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark">
                                <i className="feather-phone bg-primary text-white p-2 rounded-circle mr-2" />{" "}
                                Contact
                            </h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right" />
                            </h6>
                        </div>
                    </a>
                    <a
                        href="terms.html"
                        className="d-flex w-100 align-items-center border-bottom px-3 py-4"
                    >
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark">
                                <i className="feather-info bg-success text-white p-2 rounded-circle mr-2" />{" "}
                                Term of use
                            </h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right" />
                            </h6>
                        </div>
                    </a>
                    <a
                        href="privacy.html"
                        className="d-flex w-100 align-items-center px-3 py-4"
                    >
                        <div className="left mr-3">
                            <h6 className="font-weight-bold m-0 text-dark">
                                <i className="feather-lock bg-warning text-white p-2 rounded-circle mr-2" />{" "}
                                Privacy policy
                            </h6>
                        </div>
                        <div className="right ml-auto">
                            <h6 className="font-weight-bold m-0">
                                <i className="feather-chevron-right" />
                            </h6>
                        </div>
                    </a>
                </div>
            </div>
        </MainLayout>
    );
}

export default Profile;
