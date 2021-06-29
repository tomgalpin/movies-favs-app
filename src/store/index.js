import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import playlist from './playlist';

const reducer = combineReducers({
  playlist,
});

const store = configureStore({
  reducer,
});

export default store;
