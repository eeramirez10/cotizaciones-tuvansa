
import { fetchConToken } from "../helpers/fetch"
import { snackbar } from "../helpers/snackbar"
import { types } from "../types/types"




export const customerStartAddNew = (customer) => {

    return async (dispatch) => {

        const customerPrepare = {
            ...customer,
            salesmanUid: customer.salesman.uid

        }

        delete customerPrepare.uid

        const resp = await fetchConToken('customer', '', customerPrepare, 'POST');
        const body = await resp.json();

        console.log(body);

        if (!body.ok) {
            snackbar.error(body.msg);

            return
        }

        snackbar.success('Agregado Correctamente');





    }
}

export const customerStartUpdate = async (customer) => {

    const { uid, ...rest } = customer

    const resp = await fetchConToken(`customer/${uid}`,{ ...rest, salesmanUid: rest.salesman.uid }, 'PUT');
    const body = await resp.json();

    if (!body.ok) {
        snackbar.error('Hubo un error al actualizar')
        return
    }

    snackbar.success('Actualizado correctamente')



}


export const customerTableStarLoading = (params) => {

    return async (dispatch) => {



        const resp = await fetchConToken('customer/list', params);


        const body = await resp.json();

        if (!body.ok) {
            return console.log(body.msg)
        }



        dispatch(customerTable(body.customers))




    }

}


const customerTable = customers => ({

    type: types.customerTableLoaded,
    payload: customers
})

// const customerAddNew = (customer) => ({
//     type: types.customerAddNew,
//     payload: customer
// })