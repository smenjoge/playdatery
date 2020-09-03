import React from "react";
import Grid from '@material-ui/core/Grid';

function LoginForm(props) {
    const { email, password, error, handleInputChange, handleBtnSubmit } = props;
    return (
        <Grid justify="center" >
            <Grid >
                <h2>Login Form</h2>
            </Grid>
            <Grid container justify="center">
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
                    <Grid container justify="center" >
                        <button
                            type="submit"
                            className="btn btn-default"
                            onClick={handleBtnSubmit}
                        >
                            Login
                    </button>
                    </Grid>
                    <Grid container justify="center" >
                        <p style={{ color: 'black' }}>Or sign up <a href="/signup" style={{ color: "rgba(34,133,195,1)" }}>here</a></p>
                    </Grid>
                </form>
                <br />

            </Grid>
        </Grid>
    )
}

export default LoginForm;