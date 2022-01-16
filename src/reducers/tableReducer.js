import { types } from "../types/types";


const initialState = {

    columns:[],
    data:[],
    table:''


}



export const tableReducer = ( state = initialState, action) =>{
    switch (action.type) {
        case types.tableLoaded:

            return {
                ...state,
                data: action.payload.data,
                columns: action.payload.columns,
                table: action.payload.table
            }

        default:
            return state;
    }


}