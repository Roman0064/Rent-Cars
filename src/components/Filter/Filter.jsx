import React from "react";
import css from "./Filter.module.css";

const Filter = () => {
    return (
        <div className={css.wrapper}>
            <form action="" className={css.form_wrap}>
                <input 
                    type="text" 
                    className={css.input1}
                    placeholder="Enter the text"
                />
                <input 
                    type="number" 
                    className={css.input2}
                    placeholder="To $"
                />
                <input 
                    type="number" 
                    className={css.input3}
                    placeholder="From"
                />
                <input 
                    type="number" 
                    className={css.input4}
                    placeholder="To"
                />
                <button type="submit" className={css.btn}>Search</button>
            </form>
        </div>
    )
};

export default Filter;