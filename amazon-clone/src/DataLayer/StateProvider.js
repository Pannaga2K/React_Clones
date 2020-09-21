import React, {createContext, useContext, useReducer, } from "react";

//PREPARES A DATA LAYER
export const DataLayerContext = createContext();

//BUILD A PROVIDER WHICH PROVIDES DATA LAYER
export const DataLayer = ({reducer, initialState, children}) => (
	<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</DataLayerContext.Provider>
);

export default DataLayer;

//IMPLEMENTING INSIDE THE COMPONENT [PULLING INFO FROM DATA LAYER]
export const useDataLayerValue = () => useContext(DataLayerContext);