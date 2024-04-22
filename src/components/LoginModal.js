import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../state';

const LoginModal = () => {

    let { register, handleSubmit, reset, formState: { errors } } = useForm();

    let users = useSelector(state => state.users);
    let loggedIn = useSelector(state => state.loggedIn);
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        reset();
        console.log(users)
        users.find((user) => {
            if (user.email === data.email) {
                console.log(user);
                return user.pass === data.pass;
            }
        })
        // alert("Logged In Successfully")

        dispatch(actionCreators.toggleLogin(loggedIn))
        console.log("Logged In Successfully")
        console.log(data)
    }

    return (
        <>
            {/* <!-- Login trigger modal --> */}
            <button className="btn mx-2 btn-outline-primary" data-toggle="modal" data-target="#loginModal">
                Login
            </button>
            {/* <!-- Login Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header alert-info">
                            <h5 className="modal-title">Login</h5>
                            <button type="button" className="close border border-0" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
                                <div className="form-floating">
                                    <div>
                                        <input {...register('email', { required: true })} className="form-control" placeholder="Email Address" />
                                    </div>
                                    <br />
                                    <div>
                                        <input type="password" {...register('pass', { required: true })} className="form-control" placeholder="Password" />
                                    </div>
                                    <br />

                                    <button type="reset" className="btn btn-danger mx-2" data-dismiss="modal">Cancel</button>
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <span>Don't have an account yet?</span>
                            <button className="btn btn-sm btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;