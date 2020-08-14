import React from "react";

function SignUpForm(props) {
    const {displayName, email, password, password2, handleInputChange, handleBtnSubmit} = props;
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h2>Sign Up</h2>
                <form className="SignUp">
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input 
                            name="displayName"
                            value={displayName}
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your name"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email address</label>
                        <input 
                            name="email"
                            value={email}
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input 
                            name="password"
                            value={password}
                            type="password" 
                            className="form-control" 
                            placeholder="Password"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword2">Re-Enter Password</label>
                        <input 
                            name="password2"
                            value={password2}
                            type="password" 
                            className="form-control" 
                            placeholder="Re-Enter Password again"
                            onChange={handleInputChange}>
                        </input>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-default"
                        onClick={handleBtnSubmit}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SignUpForm;