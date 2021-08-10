import React from 'react';

const MostPopular = () => {
    return (
        <div className="osahan-popular">
            <div className="bg-light border-bottom p-3">
                <div className="forgot-page">
                    <a className="toggle toggle-2" href="#"><span /></a>
                    <a className="text-primary font-weight-bold" href="home.html"><i className="feather-chevron-left" /> Back</a>
                </div>
                <div className="d-flex align-items-center pt-3">
                    <h2 className="font-weight-bold m-0">Most Popular</h2>
                    <a className="small text-dark ml-auto" href="#">20 places</a>
                </div>
            </div>
            {/* Most popular */}
            <div className="most_popular bg-light p-3">
                <div className="row">
                    <div className="col-12">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow">
                            <div className="list-card-image">
                                <div className="trending-slider">
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img src="img/popular1.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img src="img/popular2.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img src="img/popular3.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="#" className="text-black">The osahan Restaurant
                                    </a>
                                    </h6>
                                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                                    <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span></p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
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
                                            <img src="img/popular4.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img src="img/popular5.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img src="img/popular6.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="#" className="text-black">Conrad Chicago Restaurant
                                    </a>
                                    </h6>
                                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                                    <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span></p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
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
                                            <img src="img/popular7.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img src="img/popular8.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                    <div className="osahan-slider-item">
                                        <a href="#">
                                            <img src="img/popular1.png" className="img-fluid item-img w-100" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="#" className="text-black">Bayfront Catering Restaurant
                                    </a>
                                    </h6>
                                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                                    <p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span></p>
                                </div>
                                <div className="list-card-badge">
                                    <span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
                <div className="row">
                    <div className="col">
                        <a href="home.html" className="text-dark small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-home" /></p>
                            Home
                        </a>
                    </div>
                    <div className="col selected">
                        <a href="trending.html" className="text-danger small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-map-pin text-danger" /></p>
                            Trending
                        </a>
                    </div>
                    <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
                        <div className="bg-danger rounded-circle mt-n0 shadow">
                            <a href="checkout.html" className="text-white small font-weight-bold text-decoration-none">
                                <i className="feather-shopping-cart" />
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <a href="favorites.html" className="text-dark small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-heart" /></p>
                            Favorites
                        </a>
                    </div>
                    <div className="col">
                        <a href="profile.html" className="text-dark small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-user" /></p>
                            Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopular;