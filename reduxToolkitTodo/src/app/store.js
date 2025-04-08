import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export const store = configureStore({
   
        reducer :todoReducer

});
// The store is the single source of truth for your application state.
// It holds the state tree of your application.
// The store is created using the configureStore function from Redux Toolkit.
// The configureStore function takes an object with a reducer property.
// The reducer property is a function that returns the initial state of the store.
// The reducer function is responsible for updating the state of the store.     