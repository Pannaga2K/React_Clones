import React from 'react';
import "./Product.css";
import {useDataLayerValue} from "../DataLayer/StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useDataLayerValue();
    
    console.log(basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
				id,
				title,
				image,
				price,
				rating,	
			}
        })
    }
    
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__name">{title}</p>
				<p>
					<small>₹</small>
					<strong>{price}</strong>
				</p>	
				<div className="product__rating">
                    {
						Array(rating).fill().map((_, i) => (
                            <p>*</p>
                        ))
					}
				</div>
            </div>
            <img className="product__image" src={image} alt="" />
			<button onClick={addToBasket} className="product__button">
					ADD TO CART
			</button>
        </div>
    )
}

export default Product;
