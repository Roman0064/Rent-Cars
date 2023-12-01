import React from "react";
import Filter from "../components/Filter/Filter";
import ListCars from "../components/ListCars/ListCars";

const Catalog = () => {

    return (
        <div>
            <Filter/>
            <ListCars/>
            <button type="button">Load more</button>
        </div>
    )
};

export default Catalog;