import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <RotatingLines
            strokeColor="rgba(52, 112, 255, 1)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    )
};

export default Loader;