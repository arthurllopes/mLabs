import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Posts from './Posts'


const reducer = combineReducers({Posts})
const store = configureStore({reducer})
export type RootState = ReturnType<typeof reducer>;

export default store;