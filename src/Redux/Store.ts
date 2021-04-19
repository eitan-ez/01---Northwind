import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { productsReducer } from "./ProductsState";


// Single Reducer: 
// const store = createStore(productsReducer);

// For getting ProductsState: 
// store.getState().products

// ----------------------------------------------------------

// Multiple Reducers: 
const reducers = combineReducers({ productsState: productsReducer, authState: authReducer /*, employeesState: employeesReducer, customersState: customersReducer */});
const store = createStore(reducers);

// For getting ProductsState: 
// store.getState().productsState.products
// store.getState().employeesState.employees
// store.getState().customersState.customers



export default store;
