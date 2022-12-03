import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, userReducer } from './reducers';

const store = configureStore({
    reducer : {
        count: counterReducer,
        user: userReducer
    }
  })
  
export default store
  
  
  
