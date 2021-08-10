import React from "react";
import MainLayout from "../../layout/MainLayout";
import ModalFilter from "../../layout/ModalFilter";

function Home() {
    return (
        <MainLayout>
            <ModalFilter />
            <div className="bg-primary p-3">
                <div className="text-white">
                    <div className="title d-flex align-items-center">
                        <a className="toggle" href="#">
                            <span />
                        </a>
                        <h4 className="font-weight-bold m-0 pl-5">Browse</h4>
                        <a
                            className="text-white font-weight-bold ml-auto"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            href="#"
                        >
                            Filter
                        </a>
                    </div>
                </div>
                <div className="input-group mt-3 rounded shadow-sm overflow-hidden">
                    <div className="input-group-prepend">
                        <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
                            <i className="feather-search" />
                        </button>
                    </div>
                    <input
                        type="text"
                        className="shadow-none border-0 form-control"
                        placeholder="Search for restaurants or dishes"
                        aria-label
                        aria-describedby="basic-addon1"
                    />
                </div>
            </div>
            {/* Filters */}
            <div className="bg-light">
                <div className="cat-slider border-bottom">
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Fries.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Fries</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Pizza.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Pizza</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Burger.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Burger</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Sandwich.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Sandwich</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Coffee.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Coffee</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Steak.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Steak</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/ColaCan.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">ColaCan</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Breakfast.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Breakfast</p>
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white rounded d-block p-2 text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/icons/Salad.png"
                                className="img-fluid mb-2"
                            />
                            <p className="m-0 small">Salad</p>
                        </a>
                    </div>
                </div>
                {/* Trending this week */}
                <div className="px-3 pt-3 title d-flex align-items-center">
                    <h5 className="m-0">Trending this week</h5>
                    <a
                        className="font-weight-bold ml-auto"
                        href="trending.html"
                    >
                        View all <i className="feather-chevrons-right" />
                    </a>
                </div>
                {/* slider */}
                <div className="trending-slider">
                    <div className="osahan-slider-item py-3 px-1">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            Famous Dave's Bar-B-Que
                                        </a>
                                    </h6>
                                    <p className="text-gray mb-3">
                                        Vegetarian • Indian • Pure veg
                                    </p>
                                    <p className="text-gray mb-3 time">
                                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                                            <i className="feather-clock" />{" "}
                                            15–30 min
                                        </span>{" "}
                                        <span className="float-right text-black-50">
                                            {" "}
                                            $350 FOR TWO
                                        </span>
                                    </p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">
                                        OFFER
                                    </span>{" "}
                                    <small> Use Coupon OSAHAN50</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="osahan-slider-item py-3 px-1">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                    <div className="osahan-slider-item py-3 px-1">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                </div>
                <div className="offer-slider bg-white border-top border-bottom">
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white d-block text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/pro1.jpg"
                                className="img-fluid rounded"
                            />
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white d-block text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/pro2.jpg"
                                className="img-fluid rounded"
                            />
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white d-block text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/pro3.jpg"
                                className="img-fluid rounded"
                            />
                        </a>
                    </div>
                    <div className="cat-item px-1 py-3">
                        <a
                            className="bg-white d-block text-center shadow"
                            href="trending.html"
                        >
                            <img
                                src="img/pro4.jpg"
                                className="img-fluid rounded"
                            />
                        </a>
                    </div>
                </div>
                {/* Most popular */}
                <div className="px-3 pb-3 title d-flex align-items-center">
                    <h5 className="m-0 pt-3">Most popular</h5>
                    <a
                        className="pt-3 font-weight-bold ml-auto"
                        href="most_popular.html"
                    >
                        26 places <i className="feather-chevrons-right" />
                    </a>
                </div>
                {/* Most popular */}
                <div className="most_popular px-3">
                    <div className="row">
                        <div className="col-6 pr-2">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            src="img/popular1.png"
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
                                        <p className="text-gray mb-1 small">
                                            • North • Hamburgers
                                        </p>
                                        <p className="text-gray mb-1 rating"></p>
                                        <ul className="rating-stars list-unstyled">
                                            <li>
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star" />
                                            </li>
                                        </ul>
                                        <p />
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
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            src="img/popular2.png"
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
                                                Thai Famous Indian Cuisine
                                            </a>
                                        </h6>
                                        <p className="text-gray mb-1 small">
                                            • Indian • Pure veg
                                        </p>
                                        <p className="text-gray mb-1 rating"></p>
                                        <ul className="rating-stars list-unstyled">
                                            <li>
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star" />
                                            </li>
                                        </ul>
                                        <p />
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
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            src="img/popular3.png"
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
                                        <p className="text-gray mb-1 small">
                                            • Hamburgers • Pure veg
                                        </p>
                                        <p className="text-gray mb-1 rating"></p>
                                        <ul className="rating-stars list-unstyled">
                                            <li>
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star" />
                                            </li>
                                        </ul>
                                        <p />
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
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            src="img/popular4.png"
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
                                                Bite Me Now Sandwiches
                                            </a>
                                        </h6>
                                        <p className="text-gray mb-1 small">
                                            American • Pure veg
                                        </p>
                                        <p className="text-gray mb-1 rating"></p>
                                        <ul className="rating-stars list-unstyled">
                                            <li>
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star star_active" />
                                                <i className="feather-star" />
                                            </li>
                                        </ul>
                                        <p />
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
                {/* Most sales */}
                <div className="p-3 title d-flex align-items-center">
                    <h5 className="m-0 pt-3">Most sales</h5>
                    <a className="pt-3 font-weight-bold ml-auto" href="#">
                        26 places <i className="feather-chevrons-right" />
                    </a>
                </div>
                {/* Most sales */}
                <div className="most_sale px-3 pb-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            src="img/sales1.png"
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
                        <div className="col-12 pt-2">
                            <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            src="img/sales2.png"
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
                        <div className="col-12 pt-2">
                            <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
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
                                            src="img/sales3.png"
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
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Home;
