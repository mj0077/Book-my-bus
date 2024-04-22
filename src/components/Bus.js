import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actionCreators from '../state';

const Bus = ({ bus }) => {
    const loggedIn = useSelector(state => state.loggedIn);
    const dispatch = useDispatch();

    const toSeating = useRef(null);

    const book = () => {
        if (loggedIn) {
            dispatch(actionCreators.next());
            toSeating.current.click();
        } else {
            dispatch(actionCreators.next());
            toSeating.current.click();
        }

    }

    return (
        <>
            <div className='w-50 card d-flex py-3 mx-auto mt-3 alert-primary'>
                <span className="iconify fs-1" data-icon="fe:bus"></span>
                <div>
                    <h3>{bus.busType}</h3>
                    <span>From: {bus.from}</span><br />
                    <span>Rs. {bus.fare}</span>
                </div>
                <div>
                    <span className='seats'>{bus.availableSeats} seats left</span><br /><br />
                    <button className="btn btn-sm btn-outline-success" onClick={book}>Book Now</button>
                    <Link to="/seats" hidden ref={toSeating} />
                </div>
            </div>
        </>

    );
};

export default Bus;