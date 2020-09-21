export const initialState = {
	basket: [],
	user: null
};

// SELECTOR
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch(action.type) {
		case "SET_USER": 
			return {...state, user: action.user};
		case "ADD_TO_BASKET": 
			return {...state, basket: [...state.basket, action.item]};
		case "REMOVE_FROM_BASKET":
			let newBasket = [...state.basket];
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id); //FINDS THE INDEX OF FIRST ONE
			if(index>=0)
				newBasket.splice(index, 1);           //REMOVES 1 ELEMENT FROM FOUND INDEX
			else {
				console.warn("CAN'T REMOVE PRODUCT");
			}
			return { ...state, basket: newBasket};
		default: 
			return state;
	}
}

export default reducer;
