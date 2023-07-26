import React from 'react';
import FormSide from '../FormSide';
import './form.css';
const form = () => {
  return (
    <div className='container'>
        <div className="maindiv">
            {/* FORM-SIDE COMPONENT */}
                <FormSide />
            {/* FORM-SIDE COMPONENT */}
            <br/>
            <div className="right">
                <div className="form-title">
                    <h3> Sign Up </h3>
                    <p> Have an account? <a href="/">Log in</a> </p>
                </div>
                <form action="#">
                    <div className="input-fields">
                        <div className="input-group">
                            <label htmlFor="first_name"> First Name </label>
                            <input type="text" id="first_name" name="first_name"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="last_name"> Last Name </label>
                            <input type="text" id="last_name" name="last_name"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email"> Email Address </label>
                            <input type="text" id="email" name="email"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone"> Phone Number </label>
                            <input type="number" id="phone" name="phone_number"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password"> Password </label>
                            <input type="password" id="password" name="password"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password"> Confirm Password </label>
                            <input type="text" id="confirm-password" name="confirm-password"/>
                        </div>
                    </div>
                    <input className='submit__button' type="submit" value="Create Account"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default form