import React from 'react';
import "./Payment.css";
import { useDataLayerValue } from '../DataLayer/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useDataLayerValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>CHECKOUT {<Link to="/checkout" >{basket?.length} items</Link>}</h1>
                {/* PAYMENT SECTION ---> DELIVERY ADDRESS */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>DELIVERY ADDRESS</h3>
                    </div>
                    <div className="payment__address">
                         <p>{user?.email}</p>
                         <p>SHIMOGA</p>
                         <p>KARNATAKA</p>
                    </div>
                </div>
                {/* PAYMENT SECTION ---> REVIEW ITEMS */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>REVIEW ITEMS AND DELIVERY</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />
                        ))}
                    </div>
                </div>
                {/* PAYMENT SECTION ---> PAYMENT METHOD */}
                <div className="payment__section">
                    <div className="payment__title">
                         <h3>PAYMENT METHOD</h3>
                    </div>
                    <div className="payment__details">
                        {/* STRIPE */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
