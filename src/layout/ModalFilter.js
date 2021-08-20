import React from "react";

function ModalFilter() {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Filter
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body p-0">
                        <div className="osahan-filter">
                            <div className="filter">
                                {/* SORT BY */}
                                <div className="p-3 bg-light border-bottom">
                                    <h6 className="m-0">SORT BY</h6>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio1"
                                        name="location"
                                        className="custom-control-input"
                                        defaultChecked
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="customRadio1"
                                    >
                                        Top Rated
                                    </label>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio2"
                                        name="location"
                                        className="custom-control-input"
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="customRadio2"
                                    >
                                        Nearest Me
                                    </label>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio3"
                                        name="location"
                                        className="custom-control-input"
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="customRadio3"
                                    >
                                        Cost High to Low
                                    </label>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio4"
                                        name="location"
                                        className="custom-control-input"
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="customRadio4"
                                    >
                                        Cost Low to High
                                    </label>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio5"
                                        name="location"
                                        className="custom-control-input"
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="customRadio5"
                                    >
                                        Most Popular
                                    </label>
                                </div>
                                {/* Filter */}
                                <div className="p-3 bg-light border-bottom">
                                    <h6 className="m-0">FILTER</h6>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="defaultCheck1"
                                        defaultChecked
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="defaultCheck1"
                                    >
                                        Open Now
                                    </label>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="defaultCheck2"
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="defaultCheck2"
                                    >
                                        Credit Cards
                                    </label>
                                </div>
                                <div className="custom-control border-bottom px-0  custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="defaultCheck3"
                                    />
                                    <label
                                        className="custom-control-label py-3 w-100 px-3"
                                        htmlFor="defaultCheck3"
                                    >
                                        Alcohol Served
                                    </label>
                                </div>
                                {/* Filter */}
                                <div className="p-3 bg-light border-bottom">
                                    <h6 className="m-0">ADDITIONAL FILTERS</h6>
                                </div>
                                <div className="px-3 pt-3">
                                    <input
                                        type="range"
                                        className="custom-range"
                                        min={0}
                                        max={100}
                                    />
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label>Min</label>
                                            <input
                                                className="form-control"
                                                placeholder="$0"
                                                type="number"
                                            />
                                        </div>
                                        <div className="form-group text-right col-6">
                                            <label>Max</label>
                                            <input
                                                className="form-control"
                                                placeholder="$1,0000"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer p-0 border-0">
                        <div className="col-6 m-0 p-0">
                            <button
                                type="button"
                                className="btn border-top btn-lg btn-block"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                        <div className="col-6 m-0 p-0">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFilter;
