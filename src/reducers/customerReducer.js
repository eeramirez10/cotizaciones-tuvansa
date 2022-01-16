import { types } from "../types/types";


const initialState = {
    customers: [],
    columns: [

        {
            id: 'name',
            label: 'Nombre',
            minWidth: 170,
            align: 'left',

        },
        {
            id: 'telphone',
            label: 'Telefono',
            minWidth: 170,
            align: 'left',
            // format: (value) => value.toFixed(2),
        }, 
        {
            id: 'rfc',
            label: 'RFC',
            minWidth: 170,
            align: 'left',
            // format: (value) => value.toFixed(2),
        },

    ],
    ActiveCustomer: null
}


export const customerReducer = (state = initialState, action) => {



    switch (action.type) {
        case types.customerTableLoaded:

            return {
                ...state,
                customers: action.payload
            }

        default:
            return state;
    }

}