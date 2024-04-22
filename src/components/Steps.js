import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Steps = () => {
    const stepNo = useSelector(state => state.step);

    useEffect(() => {
        const nav = document.querySelectorAll('nav.nav.nav-pills a.nav-link');

        nav.forEach((step, idx) => {
            step.classList.remove("active");

        })
        nav[stepNo].classList.add("active");
    })

    return (
        <div>
            <nav className="nav nav-pills nav-justified align-items-center">
                <Link className="nav-link disabled" aria-current="page" to="/">Search Buses</Link>
                <Link className="nav-link disabled" to="/listBuses">Select Your Bus</Link>
                <Link className="nav-link disabled" to="/seats">Choose Your Seats</Link>
                <Link className="nav-link disabled" to="/check" aria-disabled="true">Checkout</Link>
            </nav>
        </div>
    );
};

export default Steps;