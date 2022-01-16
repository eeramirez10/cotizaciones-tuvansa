import { fetchConToken } from "../helpers/fetch"
import { snackbar } from "../helpers/snackbar";
import { tableTypes } from "../tableTypes/tableTypes";
import { types } from "../types/types"


export const tableStartLoaded = (name, params) => {

    return async (dispatch) => {

        const resp = await fetchConToken(`table/${tableTypes[name].table}`, params);

        const body = await resp.json();

        if(!body.ok) {
            return snackbar.error('Hubo un error al cargar la tabla');
        }


        dispatch(tableLoaded({
            data: body.data,
            columns: tableTypes[name].columns,
            table: tableTypes[name].table
        }))


    }
}



const tableLoaded = (table) => ({
    type: types.tableLoaded,
    payload: table

})