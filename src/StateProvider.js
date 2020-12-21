// Set Up Data Layer
import React, { createContext, useContext, useReducer } from "react";

// This is the Data Layer
export const StateContext = createContext();

// Building a provider
export const StateProvider = ({ reducer, initialState, children }) => ( <StateContext.Provider value={ useReducer( reducer, initialState)}> {children} </StateContext.Provider>);

// This is How we Use it Inside of a Component
export const useStateValue = () => useContext(StateContext);