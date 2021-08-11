import React from 'react';
const Map = () => {
    return (
        <div className="osahan-map">
            <div className="bg-primary border-bottom shadow">
                <a className="toggle" href="#"><span /></a>
                <div className="input-group py-3 pr-3 pl-5 rounded overflow-hidden">
                    <div className="input-group-prepend ml-4">
                        <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block"><i className="feather-search" /></button>
                    </div>
                    <input type="text" className="shadow-none border-0 form-control" defaultValue="Punjab, 141003" aria-label aria-describedby="basic-addon1" />
                </div>
                <div className="osahan-slider-map pb-3">
                    <div className="osahan-slider-item">
                        <div className="text-white">
                            <div className="member-plan">Fast Food</div>
                        </div>
                    </div>
                    <div className="osahan-slider-item">
                        <div className="text-white">
                            <div className="member-plan">Desserts</div>
                        </div>
                    </div>
                    <div className="osahan-slider-item">
                        <div className="text-white">
                            <div className="member-plan">Dim Sum</div>
                        </div>
                    </div>
                    <div className="osahan-slider-item">
                        <div className="text-white">
                            <div className="member-plan">Breakfast</div>
                        </div>
                    </div>
                    <div className="osahan-slider-item">
                        <div className="text-white">
                            <div className="member-plan">Breakfast</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider */}
            <div className="mapouter position-absolute">
                <div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=dugri%20ludhiana&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /></div>
            </div>
            <div className="fixed-bottom h-auto">
                <div className="trending-slider">
                    <div className="osahan-slider-item px-1">
                        <div className="list-card bg-white h-100 d-flex align-items-center rounded overflow-hidden position-relative shadow">
                            <div className="list-card-image">
                                <a href="#">
                                    <img src="img/trending1.png" className="img-fluid item-img" />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="#" className="text-black">Dave's Bar-B-Que</a>
                                    </h6>
                                    <p className="text-gray mb-2">963 Madyson Drive Suite 679</p>
                                    <p className="text-warning mb-0"><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="osahan-slider-item px-1">
                        <div className="list-card bg-white h-100 d-flex align-items-center rounded overflow-hidden position-relative shadow">
                            <div className="list-card-image">
                                <a href="#">
                                    <img src="img/trending2.png" className="img-fluid item-img" />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="#" className="text-black">Thai Famous Cuisine</a></h6>
                                    <p className="text-gray mb-2">980 Syria Drive Suite 680</p>
                                    <p className="text-warning mb-0"><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="osahan-slider-item px-1">
                        <div className="list-card bg-white h-100 d-flex align-items-center rounded overflow-hidden position-relative shadow">
                            <div className="list-card-image">
                                <a href="#">
                                    <img src="img/trending3.png" className="img-fluid item-img" />
                                </a>
                            </div>
                            <div className="p-3 position-relative">
                                <div className="list-card-body">
                                    <h6 className="mb-1"><a href="#" className="text-black">The osahan Restaurant
                                    </a>
                                    </h6>
                                    <p className="text-gray mb-2">560 Africa Drive Suite 560</p>
                                    <p className="text-warning mb-0"><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /><i className="feather-star" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;