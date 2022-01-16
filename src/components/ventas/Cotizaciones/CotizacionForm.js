
import { MaterialAutocomplete } from '../../../materialComponents/MaterialAutocomplete';
import {  Grid,  TextField } from '@mui/material';

import { useHistory } from 'react-router-dom'

import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { useEffect, useState } from 'react';

export const CotizacionForm = () => {

   
    const [formValues, setFormValues] = useState({
        warehouse: {
            uid: '6f0e5b2a-db04-494a-a21e-8d28e77db854',
            name: 'Mexico'
        },
        createdAt: new Date(),
        expiration: null,
        references: '',
        aceptedAt: '',
        salesman: {
            uid: '',
            name: ''
        },
        customer: {
            uid: '97f984a8-9858-4747-9cf5-0ff5702a7d03',
            name: 'Tubos Perros'
        },
        paymentMethod: ''
    });


    
    const handleChange = (prop) => ({ target }) => {

        if (prop === 'almacen') {

            console.log(target.value)
            return
        }

        setFormValues({
            ...formValues,
            [prop]: target.value
        })

    }




 

  

    console.log(formValues)
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">  Cotizacion </h5>
                <div className="d-flex">

                    <form  >

                        <Grid container spacing={10}>

                            <Grid item md={6} >


                                <MaterialAutocomplete
                                    endpoint='warehouse'
                                    label='Almacen'
                                    defaultValue={formValues.warehouse}
                                    setFormValues={setFormValues}
                                />



                                <LocalizationProvider dateAdapter={DateAdapter}>
                                    <DatePicker
                                        label="Fecha"
                                        value={formValues.createdAt}
                                        onChange={(newValue) => {
                                            setFormValues({ ...formValues, createdAt: newValue });
                                        }}
                                        renderInput={(params) => <TextField size="small" sx={{ mr: 2, mt: 2, width: 250 }} {...params} />}
                                    />

                                    <DatePicker
                                        label="Expira"
                                        value={formValues.expiration}
                                        onChange={(newValue) => {
                                            setFormValues({ ...formValues, expiration: newValue });
                                        }}
                                        renderInput={(params) => <TextField size="small" sx={{ mt: 2, width: 250 }} {...params} />}
                                    />
                                </LocalizationProvider>




                                <TextField

                                    onChange={handleChange('references')}
                                    sx={{ width: 350 }}
                                    value={formValues.references}
                                    size="small"
                                    margin="normal"
                                    fullWidth
                                    label="Referencia"
                                    name="references"
                                    autoComplete="references"

                                />

                            </Grid>

                            <Grid item md={6} >




                                <MaterialAutocomplete
                                    endpoint='customer'
                                    label='Cliente'
                                    defaultValue={formValues.customer}
                                    setFormValues={setFormValues}
                                />

                                <MaterialAutocomplete
                                    endpoint='salesman'
                                    label='Vendedor'
                                    defaultValue={formValues.salesman}
                                    setFormValues={setFormValues}
                                />

                                <TextField

                                    onChange={handleChange('paymentMethod')}

                                    value={formValues.paymentMethod}
                                    size="small"
                                    margin="normal"
                                    fullWidth
                                    label="Metodo de pago"
                                    name="paymentMethod"
                                    autoComplete="paymentMethod"

                                />

                            </Grid>
                        </Grid>
                    </form>

                </div>
            </div>
        </div>
    )
}
