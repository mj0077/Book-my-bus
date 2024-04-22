import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '../state';


const SignupModal = () => {

    let pass = useRef(null);
    let { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    let users = useSelector(state => state.users);
    let dispatch = useDispatch();

    const checkUsername = (value) => {
        return !users.find((user) => value === user.username);
        // return !USERS.find((user) => value === user.username);
    }

    const handleSignup = (data) => {
        reset();
        // users.push(data);
        dispatch(actionCreators.addUser(data));
        console.log("Signup was successful")
        console.log(data)
    }

    const validatePass = (value) => {
        return value === watch('pass')
    }

    return (
        <div>
            {/* <!-- Signup trigger modal --> */}
            <button className="btn py-2 btn-outline-primary" data-toggle="modal" data-target="#signupModal">
                Sign Up
            </button>
            {/* <!-- Signup Modal --> */}
            <div className="modal fade " id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header alert-info">
                            <h5 className="modal-title">Sign Up</h5>
                            <button type="button" className="close border border-0" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(handleSignup)} autoComplete="off">
                                <div className="form-floating">
                                    <div>
                                        <input {...register('username', { required: true, validate: checkUsername })} className="form-control" placeholder="Username" />
                                        {errors.username?.type === "validate" && <span>Username already taken</span>}
                                    </div>
                                    <br />
                                    <div>
                                        <input {...register('email', { required: true, pattern: /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.com]*[.biz]*[.tv]*/ })} className="form-control" placeholder="Email Address" />
                                        {errors.email?.type === "pattern" && <span>Please enter a valid Email address</span>}
                                    </div>
                                    <br />
                                    <div>
                                        <input type="password" {...register('pass', { required: true })} className="form-control" placeholder="Password" />
                                    </div>
                                    <br />
                                    <div>
                                        <input type="password" {...register('cpass', { required: true, validate: validatePass })} className="form-control" placeholder="Confirm Password" />
                                        {errors.cpass?.type === "validate" && <span>Passwords do not match</span>}
                                    </div>
                                    <br />

                                    <button type="reset" className="btn btn-danger mx-2" data-dismiss="modal">Cancel</button>
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <span>Already have an account?</span>
                            <button className="btn btn-sm btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#loginModal">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;