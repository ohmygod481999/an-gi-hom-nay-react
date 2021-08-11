import React from 'react';

const BottomNav = () => {

    return (

        <nav id="main-nav">
            <ul className="second-nav">
                <li><a href="index.html"><i className="feather-grid mr-2"/> Intro</a>
                </li>
                <li><a href="landing.html"><i className="feather-layers mr-2"/> Landing</a>
                </li>
                <li><a href="home.html"><i className="feather-home mr-2"/> Homepage</a></li>
                <li>
                    <a href="#"><i className="feather-edit-2 mr-2"/> Authentication</a>
                    <ul>
                        <li><a href="login.html">Login</a>
                        </li>
                        <li><a href="signup.html">Register</a>
                        </li>
                        <li><a href="forgot_password.html">Forgot Password</a>
                        </li>
                        <li><a href="verification.html">Verification</a>
                        </li>
                        <li><a href="location.html">Location</a>
                        </li>
                        <li><a href="select_country.html">Select Country</a>
                        </li>
                    </ul>
                </li>
                <li><a href="trending.html"><i className="feather-trending-up mr-2"/> Trending</a>
                </li>
                <li><a href="most_popular.html"><i className="feather-award mr-2"/> Most Popular</a>
                </li>
                <li><a href="restaurant.html"><i className="feather-paperclip mr-2"/> Restaurant Detail</a>
                </li>
                <li><a href="recipe.html"><i className="feather-file-text mr-2"/> Recipe</a>
                </li>
                <li><a href="checkout.html"><i className="feather-list mr-2"/> Checkout</a>
                </li>
                <li><a href="map.html"><i className="feather-map-pin mr-2"/> Live Map</a>
                </li>
                <li><a href="payment.html"><i className="feather-credit-card mr-2"/> Payment</a>
                </li>
                <li>
                    <a href="#"><i className="feather-user mr-2"/> Profile</a>
                    <ul>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="favorites.html">Favorites</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="feather-book mr-2"/> Pages</a>
                    <ul>
                        <li><a href="filters.html">Filters</a>
                        </li>
                        <li><a href="terms.html">Terms &amp; conditions</a>
                        </li>
                        <li><a href="faq.html">FAQ</a>
                        </li>
                        <li><a href="privacy.html">Privacy &amp; Policy</a>
                        </li>
                        <li><a href="contact-us.html">Contact Us</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="feather-alert-triangle mr-2"/> Error</a>
                    <ul>
                        <li><a href="not-found.html">Not Found</a>
                        </li>
                        <li><a href="maintence.html"> Maintence</a>
                        </li>
                        <li><a href="coming-soon.html">Coming Soon</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i className="feather-link mr-2"/> Navigation Link Example</a>
                    <ul>
                        <li>
                            <a href="#">Link Example 1</a>
                            <ul>
                                <li>
                                    <a href="#">Link Example 1.1</a>
                                    <ul>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Link Example 1.2</a>
                                    <ul>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                        <li><a href="#">Link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Link Example 2</a></li>
                        <li><a href="#">Link Example 3</a></li>
                        <li><a href="#">Link Example 4</a></li>
                        <li data-nav-custom-content>
                            <div className="custom-message">
                                You can add any custom content to your navigation items. This text is just an example.
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="bottom-nav">
                <li className="email">
                    <a className="text-danger" href="home.html">
                        <p className="h5 m-0"><i className="feather-home text-danger"/></p>
                        Home
                    </a>
                </li>
                <li className="github">
                    <a href="faq.html">
                        <p className="h5 m-0"><i className="feather-message-circle"/></p>
                        FAQ
                    </a>
                </li>
                <li className="ko-fi">
                    <a href="contact-us.html">
                        <p className="h5 m-0"><i className="feather-phone"/></p>
                        Help
                    </a>
                </li>
            </ul>
        </nav>
    );

};

export default BottomNav;