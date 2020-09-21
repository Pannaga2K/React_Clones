import React from 'react';
import "./CheckoutProduct.css";
import { useDataLayerValue } from '../DataLayer/StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useDataLayerValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div  className="checkoutProduct">
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p>
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <img className="checkoutProduct__image" src={image} alt="" />
                </div>
            <button onClick={removeFromBasket}>REMOVE FROM BASKET</button>
        </div>
    )
}

export default CheckoutProduct;
