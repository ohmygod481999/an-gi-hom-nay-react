import React from 'react';

const SelectCountry = () => {
    return (
        <div className="osahan-country">
            <div className="search_location bg-primary p-3 text-right">
                <a className="text-white" href="home.html">Skip <i className="feather-chevron-right" /></a>
                <div className="input-group mt-3 rounded shadow-sm overflow-hidden">
                    <div className="input-group-prepend">
                        <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block"><i className="feather-search" /></button>
                    </div>
                    <input type="text" className="shadow-none border-0 form-control" placeholder="Enter Your Location" aria-label aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="p-3 border-bottom">
                <a href="home.html" className="text-decoration-none">
                    <p className="font-weight-bold text-primary m-0"><i className="feather-navigation" /> New York, USA</p>
                </a>
            </div>
            <div className="filter">
                <h6 className="px-3 py-3 bg-light pb-1 m-0 border-bottom">Choose your country</h6>
                <div className="custom-control  border-bottom px-0 custom-radio">
                    <input type="radio" id="customRadio1" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio1">Afghanistan</label>
                </div>
                <div className="custom-control  border-bottom px-0 custom-radio">
                    <input type="radio" id="customRadio2" name="location" className="custom-control-input" defaultChecked />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio2">India</label>
                </div>
                <div className="custom-control  border-bottom px-0 custom-radio">
                    <input type="radio" id="customRadio3" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio3">USA</label>
                </div>
                <div className="custom-control  border-bottom px-0 custom-radio">
                    <input type="radio" id="customRadio4" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio4">Australia</label>
                </div>
                <div className="custom-control  border-bottom px-0 custom-radio">
                    <input type="radio" id="customRadio5" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio5">Japan</label>
                </div>
                <div className="custom-control  border-bottom px-0 custom-radio">
                    <input type="radio" id="customRadio6" name="location" className="custom-control-input" />
                    <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio6">China</label>
                </div>
            </div>
        </div>
    );
};

export default SelectCountry;