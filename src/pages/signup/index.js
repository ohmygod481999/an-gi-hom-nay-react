import React from 'react';

const Signup = () => {
    return (
        <div className="osahan-signup login-page">
            <video loop autoPlay muted id="vid">
                <source src="img/bg.mp4" type="video/mp4" />
                <source src="img/bg.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="vh-100">
                <div className="p-4">
                    <h2 className="text-white my-0">Hello There.</h2>
                    <p className="text-white text-50">Sign up to continue</p>
                    <form className="mt-5 mb-4" action="landing.html">
                        <div className="form-group">
                            <label htmlFor="exampleInputName1" className="text-white">Name</label>
                            <input type="text" placeholder="Enter Name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputNumber1" className="text-white">Mobile Number</label>
                            <input type="number" placeholder="Enter Mobile" className="form-control" id="exampleInputNumber1" aria-describedby="numberHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-white">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button className="btn btn-primary btn-lg btn-block">
                            <a className="verification.html">
                                SIGN UP
                            </a></button><a className="verification.html">
                        <div className="py-2">
                            <button className="btn btn-facebook btn-lg btn-block"><i className="feather-facebook" /> Connect with Facebook</button>
                        </div>
                    </a></form></div><a className="verification.html">
            </a><div className="new-acc fixed-bottom d-flex align-items-center justify-content-center"><a className="verification.html">
            </a><a href="login.html"><p className="text-center text-white m-0">Already an account? Sign in</p></a>
            </div>
            </div>
        </div>
    );
};

export default Signup;