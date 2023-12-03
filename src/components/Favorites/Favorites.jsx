import React, { useState } from "react";
import css from './Favorites.module.css';
import { useDispatch, useSelector } from "react-redux";
import svg_active from '../../sprite/active.svg';
import Modal from "components/Modal/Modal";
import { removeFavorite } from "redux/carsReducer";

// onClick={() => handleFavoriteClick(car.id)}

const Favorites = () => {
    const dispatch = useDispatch();
    const favoriteCars = useSelector(state => state.cars.favorites);
    const message = "Cars not found,please add cars.";
    const cars = useSelector((state) => state.cars.items);
    const filter = useSelector((state) => state.filter);
    const [modal, setModal] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const handleModalClick = (itemId) => {
        const clickedCar = displayCars.find((car) => car.id === itemId);
        if (clickedCar) {
            setModal(clickedCar);
            toggleModal();
        }
    };
    
    const toggleModal = () => {
        setModalShow(modalShow => !modalShow);
    };

    const handleFavoriteRemove = (itemId) => {
        const clickedCar = displayCars.find((car) => car.id === itemId);
        if (clickedCar) {
            dispatch(removeFavorite(clickedCar));
        }
    };

    const filteredCars = cars.filter(car => {
        const makeFilter = car.make.toLowerCase();
        if(filter.make === makeFilter || car.make){
            return car.make.toLowerCase().includes(filter.make.toLowerCase())
        }
        return false;
    });

    const displayCars = filter && Object.keys(filteredCars).length > 0 ? filteredCars : cars;

    return (
        <div>
            <ul className={css.wrapper}>
                {favoriteCars.length === 0 ? <h1>{message}</h1> : favoriteCars.map((car) => (
                    <li key={car.id} className={css.card}>
                    <img src={svg_active} alt="active" onClick={() => handleFavoriteRemove(car.id)} className={css.svg} />
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
                         <button 
                            type="button" 
                            className={css.btn} 
                            onClick={() => handleModalClick(car.id)}
                        >Learn More
                        </button>
                     </div>
                </li>
                ))}
            </ul>
            {modalShow && <Modal item={modal} onClose={toggleModal} />}
        </div>
    )
};


export default Favorites;