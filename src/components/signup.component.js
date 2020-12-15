import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";


export default class SignUp extends Component {
   


    render() {
        return (
            <form >
                <h3>Sign Up</h3>



                
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Date of Birth </label>
                    <input type="date" className="form-control" placeholder="Date of Birth" />
                </div>

                

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/sign-in"}>sign in?</Link>
                </p>
            </form>
        );
    }
}