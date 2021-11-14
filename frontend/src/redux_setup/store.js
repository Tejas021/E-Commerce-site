import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./reducers/cartRedux"
import userReducer from "./reducers/userRedux"
export default  configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer
    }
})