import React from "react";
import Header2 from "../../layout/Header2";
import MainLayout from "../../layout/MainLayout";

const MostPopular = () => {
    return (
        <MainLayout>
            <Header2 title={"Khám phá"}/>
            {/* Most popular */}
            <div className="most_popular bg-light p-3">
                <div className="row">
                    <div className="col-12">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow">
                            <div className="list-card-image">
                                <div className="trending-slider">
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular1.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular2.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular3.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a href="#" className="text-black">
                                            The osahan Restaurant
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        North • Hamburgers • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            15–25 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $500 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">
                                        OFFER
                                    </span>{" "}
                                    <small>65% OSAHAN50</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow">
                            <div className="list-card-image">
                                <div className="trending-slider">
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular4.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular5.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular6.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a href="#" className="text-black">
                                            Conrad Chicago Restaurant
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        North • Hamburgers • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            15–25 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $500 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">
                                        OFFER
                                    </span>{" "}
                                    <small>65% OSAHAN50</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow">
                            <div className="list-card-image">
                                <div className="trending-slider">
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular7.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular8.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img
                                                src="img/popular1.png"
                                                className="img-fluid item-img w-100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a href="#" className="text-black">
                                            Bayfront Catering Restaurant
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        North • Hamburgers • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            15–25 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $500 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">
                                        OFFER
                                    </span>{" "}
                                    <small>65% OSAHAN50</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
        </MainLayout>
    );
};

export default MostPopular;
