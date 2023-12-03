import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cars } from "../../redux/operations";
import css from "./ListCars.module.css";
import Modal from "components/Modal/Modal";
import svg_active from '../../sprite/active.svg';
import svg_normal from '../../sprite/normal.svg';
import { removeFavorite, setFavorite } from "redux/carsReducer";

const ListCars = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars.items);
    const filter = useSelector((state) => state.filter);
    const favorites = useSelector((state) => state.cars.favorites)
    const [visibleCars, setVisibleCars] = useState(12);
    const [modal, setModal] = useState({});
    const [modalShow, setModalShow] = useState(false);
   
    
    useEffect(() => {
        dispatch(Cars());
    }, [dispatch]);

    
      const handleModalClick = (itemId) => {
        const clickedCar = displayCars.find((car) => car.id === itemId);
        if (clickedCar) {
            setModal(clickedCar);
            toggleModal();
        }
    };

    const handleFavoriteClick = (itemId) => {
        const clickedCar = displayCars.find((car) => car.id === itemId);
        if (clickedCar) {
            dispatch(setFavorite(clickedCar));
        }
    };

    const handleFavoriteRemove = (itemId) => {
        const clickedCar = displayCars.find((car) => car.id === itemId);
        if (clickedCar) {
            dispatch(removeFavorite(clickedCar));
        }
    };
    
      const toggleModal = () => {
        setModalShow(modalShow => !modalShow);
      };

    const filteredCars = cars.filter(car => {
        const makeFilter = car.make.toLowerCase();
        if(filter.make === makeFilter || car.make){
            return car.make.toLowerCase().includes(filter.make.toLowerCase())
        }
        return false;
    });

    
    const displayCars = filter && Object.keys(filteredCars).length > 0 ? filteredCars : cars;
    

    const loadMore = () => {
        setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
    };

    return (
        <div>
            <ul className={css.wrapper}>
                {displayCars.slice(0, visibleCars).map((car) => (
                    <li key={car.id} className={css.card}>
                        {favorites.some((favoriteCar) => favoriteCar.id === car.id) ? (
                        <img src={svg_active} alt="active" onClick={() => handleFavoriteRemove(car.id)} className={css.svg} />
                        ) : (
                        <img src={svg_normal} alt="normal" onClick={() => handleFavoriteClick(car.id)} className={css.svg} />
                        )}
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
                         <button 
                            type="button" 
                            className={css.btn} 
                            onClick={() => handleModalClick(car.id)}
                        >Learn More
                        </button>
                    </li>
                ))}
            </ul>
            {visibleCars < displayCars.length && (
                <button onClick={loadMore} className={css.btn_more}>Load more</button>
            )}
            {modalShow && <Modal item={modal} onClose={toggleModal} />}
        </div>
    );
};

export default ListCars;