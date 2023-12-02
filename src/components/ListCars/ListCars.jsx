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
                        <div className={css.wrap_text}>
                            <div className={css.wraper_name}>
                                <p>{car.make}</p>
                                <p>{car.model},</p>
                                <p>{car.year}</p>
                                <p>{car.rentalPrice}</p>
                            </div>
                            <span className={css.item}>
                                <p>{car.address}</p>
                                <p>{car.rentalCompany}</p>
                                <p>Premium</p>
                                <p>{car.type}</p>
                                <p>{car.model}</p>
                                <p>{car.id}</p>
                                <p>{car.functionalities[0]}</p>
                            </span>
                        </div>
                        <button type="button" className={css.btn}>Learn More</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ListCars;