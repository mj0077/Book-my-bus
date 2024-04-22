import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../state/index'


const Search = () => {

    let { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [today, setToday] = useState(new Date());
    const toBusesPage = useRef();

    const dispatch = useDispatch();
    const { next } = bindActionCreators(actionCreators, dispatch);

    const dateToStr = (date) => {
        // console.log(date);
        return today.getFullYear() + "-"
            + (today.getMonth() < 10 ? "0" + (today.getMonth() + 1) : today.getMonth())
            + "-" + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate());
    }

    let todayStr = dateToStr(today);

    const searchBuses = (data) => {
        console.log(data);
        toBusesPage.current.click();
        reset();
    }

    return (
        <div className="card w-50 my-4 mx-auto alert-primary">
            <h3 className='text-center py-3 card-header'>Search for buses</h3>
            <form onSubmit={handleSubmit(searchBuses)} >

                <div className="row g-2 justify-content-md-center my-4">
                    <div className="col-md-4">
                        <div className="form-floating">
                            <select className="form-select" placeholder='open' {...register('departure', { required: true })}>
                                <option></option>
                                <option value="1">Bangalore</option>
                                <option value="2">Chennai</option>
                                <option value="3">Mumbai</option>
                                <option value="4">Pune</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Departure (From)</label>
                            {errors.departure?.type === 'required' && <span>Please select Place of Departure</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <select className="form-select" {...register('destination', { required: true })}>
                                <option></option>
                                <option value="1">Ahmedabad</option>
                                <option value="2">Chennai</option>
                                <option value="3">Mumbai</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Destination (To)</label>
                            {errors.destination?.type === 'required' && <span>Please select Destination</span>}
                        </div>
                    </div>
                </div>
                <div className="row g-2 justify-content-md-center ">
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="date" className="form-control" name="dOD" {...register('dateOfDep', { required: true, min: todayStr })} />
                            <label htmlFor="dOD">Departure Date</label>

                            {errors.dateOfDep?.type === 'required' && <span>Please select Date of departure</span>}
                            {errors.dateOfDep?.type === 'min' && <span>Please select a later Date</span>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input type="date" className="form-control" name="dOR" {...register('dateOfReturn')} />
                            <label htmlFor="dOR">Return Date (Optional)</label>
                        </div>
                    </div>
                </div>

                <div className="row g-2 justify-content-md-center my-4">
                    <button className="btn btn-success col-md-2 py-3 mx-1">Search</button>
                    <Link ref={toBusesPage} hidden to="/buses" onClick={next}></Link>
                    <button type="reset" className="btn btn-danger col-md-2 py-3 mx-1">Clear</button>
                </div>
            </form>
        </div>
    );
};

export default Search;