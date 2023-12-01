import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cars } from "../../redux/operations";
import css from "./ListCars.module.css";

const ListCars = () => {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.items);
   
    useEffect(() => {
        dispatch(Cars())
    },[dispatch]);
    console.log('cars', cars)

    return (
        <div>
            <ul className={css.wrapper}>
                {cars.map(car => (
                    <li key={car.id} className={css.card}>
                        <img src={car.img} alt={car.name} className={css.img}/>
                        <p>{car.make}</p>
                        <p>{car.model}</p>
                        <p>{car.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ListCars;