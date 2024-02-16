import { combineReducers, legacy_createStore } from "redux";
import { authReducer} from "./AuthReducer/authReducer"
import { productReducer} from "./ProductReducer/productReducer"

const rootReducer = combineReducers({authReducer,productReducer})
export const store = legacy_createStore(rootReducer);