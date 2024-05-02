import React from "react";
import { useState } from "react";

const Product = (props) => {

    const [favourite, setFavourite] = useState(false)

    const toggleFavourite = () => {
        setFavourite(!favourite);
    }
    return (
        <div id="product">
            <h1 id="name">{props.name}</h1>

            <p id="description">{props.description}</p>
            <p id="price">{props.price}</p>
            <button onClick={toggleFavourite}>
                {favourite ? "Remove from favorites" : "Add to favorites"}
            </button>
        </div>

    );
};

export default Product;


