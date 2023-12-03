import React, { useState } from "react";
import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/carsReducer";
import {makes, price} from './makes';

const Filter = () => {
    const dispatch = useDispatch();
    // const cars = useSelector((state) => state.cars.items);
    // const filter = useSelector((state) => state.filter);

    const [make, setText] = useState("");
    const [rentalPrice, setToPrice] = useState("");
    const [FromMileage, setFromPrice] = useState("");
    const [ToMileage, setTo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setFilter({ make, rentalPrice, FromMileage, ToMileage }));
    };

    return (
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit} className={css.form_wrap}>
                <select
                    value={make}
                    onChange={(e) => setText(e.target.value)}
                    className={css.select}>
                    <option value="">Enter the text</option>
                    {makes.map((m) => (
                        <option value={m}>{m}</option>
                    ))}
                </select>
                <select
                    value={rentalPrice}
                    onChange={(e) => setToPrice(e.target.value)}
                    className={css.input2}>
                    <option value="">To $</option>
                    {price.map((p) => (
                        <option value={p}>{p}</option>
                    ))}
                </select>
                <input
                    type="number"
                    className={css.input3}
                    placeholder="From"
                    value={FromMileage}
                    onChange={(e) => setFromPrice(e.target.value)}
                />
                <input
                    type="number"
                    className={css.input4}
                    placeholder="To"
                    value={ToMileage}
                    onChange={(e) => setTo(e.target.value)}
                />
                <button type="submit" className={css.btn}>Search</button>
            </form>
        </div>
    );
};

export default Filter;
