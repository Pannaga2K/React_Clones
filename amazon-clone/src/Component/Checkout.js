import React, { forwardRef }  from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useDataLayerValue } from '../DataLayer/StateProvider';
// import FlipMove from 'react-flip-move';

function Checkout() {
    const [{basket}, dispatch] = useDataLayerValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://savingsbeagle.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-14-at-2.46.32-PM.png" alt="" />
                {basket?.length === 0 ? (
					<div>
						<h1>NOTHING IN YOUR CART</h1>
					</div>
				) : (
                <div>
                    <h2 className="checkout__title">YOUR SHOPPING CART</h2>
                    {/* BASKET */}
                    {basket.map((item) => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />
                            ))}
                </div>
                )}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
};


export default Checkout;
