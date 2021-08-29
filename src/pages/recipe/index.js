import React from 'react';

const Recipe = () => {
    return (
        <div className="osahan-recepie">
            {/* recepie-header */}
            <div className="recepie-header">
                <div className="position-absolute px-3 py-4 d-flex align-items-center w-100">
                    <a className="toggle" href="#"><span /></a>
                    <div className="d-flex ml-auto">
                        <p className="m-0 ml-auto mr-1 recepie-feather"><a href="restaurant.html#ratings-and-reviews"><i className="feather-upload shadow bg-light rounded-circle p-2" /></a></p>
                        <p className="m-0 ml-auto"><a href="restaurant.html#ratings-and-reviews"><i className="feather-star shadow bg-light text-primary rounded-circle p-2" /></a></p>
                    </div>
                </div>
                <img src="img/trending1.png" className="img-fluid w-100" alt="Responsive image" />
            </div>
            {/* recepie-body */}
            <div className="recepie-body">
                <div className="p-3">
                    <h2 className="font-weight-bold">California Roll with Black Sesame</h2>
                    <h6 className="font-weight-bold mt-4">DESCRIPTION</h6>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <h6 className="font-weight-bold mt-4">EXTRAS</h6>
                    <div className="custom-control custom-radio border-bottom py-2">
                        <input type="radio" id="customRadio1" name="location" className="custom-control-input" defaultChecked />
                        <label className="custom-control-label" htmlFor="customRadio1">Tuna <span className="text-muted">+$35.00</span></label>
                    </div>
                    <div className="custom-control custom-radio border-bottom py-2">
                        <input type="radio" id="customRadio2" name="location" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio2">Salmon <span className="text-muted">+$20.00</span></label>
                    </div>
                    <div className="custom-control custom-radio border-bottom py-2">
                        <input type="radio" id="customRadio3" name="location" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio3">Wasabi <span className="text-muted">+$25.00</span></label>
                    </div>
                    <div className="custom-control custom-radio border-bottom py-2">
                        <input type="radio" id="customRadio4" name="location" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio4">Unagi  <span className="text-muted">+$10.00</span></label>
                    </div>
                    <div className="custom-control custom-radio border-bottom py-2">
                        <input type="radio" id="customRadio5" name="location" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio5">Vegetables  <span className="text-muted">+$5.00</span></label>
                    </div>
                    <div className="custom-control custom-radio border-bottom py-2">
                        <input type="radio" id="customRadio6" name="location" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadio6">Noodles  <span className="text-muted">+$30.00</span></label>
                    </div>
                    <h6 className="font-weight-bold mt-4">QUANTITY</h6>
                    <div className="d-flex align-items-center">
                        <p className="m-0">1 Item</p>
                        <div className="ml-auto">
                            <select className="custom-select custom-select-sm my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Choose...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom">
                <a href="profile.html" className="btn btn-primary btn-lg btn-block">Add to order</a>
            </div>
        </div>
    );
};

export default Recipe;