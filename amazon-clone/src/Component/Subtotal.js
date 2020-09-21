import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useDataLayerValue } from '../DataLayer/StateProvider';
import {getBasketTotal} from "../DataLayer/reducer";
import {useHistory} from "react-router-dom";

function Subtotal() {
	const [{basket}, dispatch] = useDataLayerValue();
	const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat
				renderText={(value) => (
				<>
					<p>
						Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
					</p>
					<small className="subtotal__gift">
						<input type="checkbox" />THIS ORDER CONTAINS A GIFT
					</small>
				</>
					
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeperator={true}
				prefix={"₹"}
			/>
            <button onClick={e => history.push("/payment")}>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default Subtotal
