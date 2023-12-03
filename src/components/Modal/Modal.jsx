import React, { useEffect } from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css';
import svg from '../../sprite/x.svg'


const Modal = ({ item, onClose}) => {

    useEffect(() => {
        const handleKeyDown = e => {
            if(e.code === 'Escape'){
                onClose();
            };
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    const onClickBackdrop = e => {
        if(e.target === e.currentTarget){
            onClose();
        };
    };

    return <div class={css.overlay} onClick={onClickBackdrop}>
            <div class={css.modal}>
                <img src={svg} alt="Close" onClick={onClose} className={css.svg}/>
                <img src={item.img} alt="img" className={css.img}/>
                <div className={css.wrap_1}>
                    <span className={css.wrap_make}>
                        <p>{item.make}</p>
                        <p className={css.model}>{item.model},</p>
                        <p>{item.year}</p>
                    </span>
                    <span className={css.charac}>
                        <p>{item.address}   |</p>
                        <p>Id:{item.id}   |</p>
                        <p>Year:{item.year}   |</p>
                        <p>Type:{item.type}   |</p>
                        <p>Fuel Consumption:{item.fuelConsumption}   |</p>
                        <p>Engine Size:{item.engineSize}</p>
                    </span>
                        <h3 className={css.descr}>{item.description}</h3>
                </div>
                    <h3 className={css.accessories}>Accessories and functionalities:</h3>
                <span className={css.func_acc}>
                    <p>{item.functionalities[0]}   |</p>
                    <p>{item.functionalities[1]}   |</p>
                    <p>{item.functionalities[2]}   |</p>
                    <p>{item.accessories[0]}   |</p>
                    <p>{item.accessories[1]}   |</p>
                    <p>{item.accessories[2]}   |</p>
                </span>
                    <h3 className={css.accessories}>Rental Conditions:</h3>
                <span className={css.wrap_last}>
                    <p className={css.p}>Minimum age:<span>21</span></p>
                    <p className={css.p}>Valid driver’s license</p>
                    <p className={css.p}>{item.functionalities[1]}</p>
                    <p className={css.p}>Mileage: <span>{item.mileage}</span></p>
                    <p className={css.p}>Price:<span>{item.rentalPrice}</span></p>
                </span>
                <a href="tel:+380730000000" className={css.btn_rental}>Rental Car</a>
            </div>
    </div>
};

Modal.propTypes = {
    item: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;