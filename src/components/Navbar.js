import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import Steps from './Steps';
import { bindActionCreators } from 'redux';
import actionCreators from '../state';

const Navbar = () => {

    const loggedIn = useSelector(state => state.loggedIn);
    const dispatch = useDispatch()
    const { toggleLogin } = bindActionCreators(actionCreators, dispatch);

    return (
        <>
            <h3 className='alert-danger py-3 px-3 m-0 d-flex justify-content-between'>
                <Link to="/">Bus Online Booking </Link>

                {!loggedIn ? (<div className='d-flex'>
                    <LoginModal />
                    <SignupModal />
                </div>) : <div>
                    <span className='fs-5'>Welcome, </span>
                    <button className='btn btn-outline-danger' onClick={() => toggleLogin(loggedIn)}>Logout</button>
                </div>}
            </h3>

            <Steps />
        </>
    );
};

export default Navbar;