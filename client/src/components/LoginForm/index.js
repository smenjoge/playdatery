import React from "react";

function LoginForm(props) {
    const {email, password, error, handleInputChange, handleBtnSubmit} = props;
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h2>Login Form</h2>
                {error !== null && (
                    <div className="py-1 bg-red-600 w-full text-danger text-center mb-3">
                        {error}
                    </div>
                )}
                <form className="login">
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
                    <button 
                        type="submit" 
                        className="btn btn-default"
                        onClick={handleBtnSubmit}
                    >
                        Login
                    </button>
                </form>
                <br />
                <p>Or sign up <a href="/signup">here</a></p>
            </div>
            </div>
        </div>
    )
}

export default LoginForm;