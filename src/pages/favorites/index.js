import React from "react";
import Header1 from "../../layout/Header1";
import MainLayout from "../../layout/MainLayout";

function Favorites() {
    return (
        <MainLayout>
            <Header1 title={"Món của tôi"} />
            <div className="most_popular p-3">
                <div className="row">
                    <div className="col-6 pr-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending1.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
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
                    <div className="col-6 pl-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending2.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
                                            Thai Famous Cuisine
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        North Indian • Indian • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            30–35 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $250 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-success">
                                        OFFER
                                    </span>{" "}
                                    <small>65% off</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-6 pr-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending3.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
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
                    <div className="col-6 pl-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending4.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
                                            Bite Me Sandwiches
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        North Indian • American • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            30–35 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $250 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-success">
                                        OFFER
                                    </span>{" "}
                                    <small>65% off</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-6 pr-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending5.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
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
                    <div className="col-6 pl-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending6.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
                                            Bite Me Sandwiches
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        North Indian • American • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            30–35 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $250 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-success">
                                        OFFER
                                    </span>{" "}
                                    <small>65% off</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-6 pr-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending7.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
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
                    <div className="col-6 pl-2">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                            <div className="list-card-image">
                                <div className="star position-absolute">
                                    <span className="badge badge-success">
                                        <i className="feather-star" /> 3.1
                                        (300+)
                                    </span>
                                </div>
                                <div className="favourite-heart text-danger position-absolute">
                                    <a href="#">
                                        <i className="feather-heart" />
                                    </a>
                                </div>
                                <div className="member-plan position-absolute">
                                    <span className="badge badge-dark">
                                        Promoted
                                    </span>
                                </div>
                                <a href="restaurant.html">
                                    <img
                                        src="img/trending8.png"
                                        className="img-fluid item-img w-100"
                                    />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1">
                                        <a
                                            href="restaurant.html"
                                            className="text-black"
                                        >
                                            Bite Me Sandwiches
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        North Indian • American • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            30–35 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $250 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-success">
                                        OFFER
                                    </span>{" "}
                                    <small>65% off</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Favorites;
