import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { customerReducer } from "./customerReducer";
import { tableReducer } from "./tableReducer";

export const rootReducer = combineReducers({
    cliente: customerReducer,
    auth: authReducer,
    table: tableReducer
})