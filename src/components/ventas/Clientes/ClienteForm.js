import { Formik } from 'formik'

import { Autocomplete, Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import SaveIcon from '@mui/icons-material/Save';
import { customerStartAddNew, customerStartUpdate } from '../../../actions/customers';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchConToken } from '../../../helpers/fetch';
import { useState } from 'react';

export const ClienteForm = ({ initialValues, autoCompleteValue, setAutoCompleteValue }) => {

    const dispatch = useDispatch()

    const [options, setOptions] = useState([])

    const formSubmit = (values) => {

        if (!values.uid) {

            return dispatch(customerStartAddNew(values));

        }

        dispatch(customerStartUpdate(values));
    }



    useEffect(() => {
        const loadSailsmans = async () => {

            const resp = await fetchConToken(`salesman`);

            const { salesmans } = await resp.json();

            const salesmanArray = salesmans.map(salesman => ({ ...salesman, label: salesman.fullName }))

            setOptions(salesmanArray)
        }

        loadSailsmans()

    },[])

    


    const formValidation = (values) => {

        const errors = {};

        if (!values.name) {
            errors.name = 'El nombre es requerido'
        }

        if (!values.rfc) {
            errors.rfc = "El RFC es requerido"
        }

        if (!values.street) {
            errors.street = "La calle es requerido"
        }

        if (!values.city) {
            errors.city = ' Ciudad es requerido'
        }
        if (!values.state) {
            errors.state = ' Estado es requerido'
        }
        if (!values.telphone) {
            errors.telphone = ' Telefono es requerido'
        }
        if (!values.contact) {
            errors.contact = ' Contacto es requerido'
        }
        if (!values.credit) {
            errors.credit = ' Credito es requerido'
        }
        if (!values.cp) {
            errors.cp = 'CP es requerido'
        } else if (!/^[0-9]{5}$/i.test(values.cp)) {
            errors.cp = ' CP Invalido'
        }

        if (!values.email) {
            errors.email = ' Email es requerido'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Email invalido'
        }

        return errors;
    }



    return (

        <Formik
            initialValues={initialValues}
            onSubmit={formSubmit}
            validate={formValidation}

        >{({ 
            handleSubmit, 
            values, 
            setValues, 
            handleChange, 
            errors, 
            handleBlur, 
            touched, 
            isSubmitting, 
            isValid 
        }) => (

            <form onSubmit={handleSubmit} >

                <Grid container spacing={3}>

                    <Grid item md={6} >

                        <TextField
                            error={!!touched.name && !!errors.name}
                            helperText={!!touched.name && !!errors.name && errors.name}
                            onBlur={handleBlur}
                            onChange={handleChange('name')}
                            value={values.name}

                            size="small"
                            margin="normal"
                            fullWidth
                            label="Razon Social"
                            name="name"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField

                            error={!!touched.rfc && !!errors.rfc}
                            helperText={!!touched.rfc && !!errors.rfc && errors.rfc}
                            onBlur={handleBlur}
                            size="small"
                            margin="normal"


                            id="rfc"
                            label="RFC"
                            name="rfc"
                            autoComplete="rfc"
                            value={values.rfc}
                            onChange={handleChange('rfc')}

                        />
                        <TextField

                            error={!!touched.street && !!errors.street}
                            helperText={!!touched.street && !!errors.street && errors.street}
                            onBlur={handleBlur}

                            size="small"
                            margin="normal"

                            fullWidth
                            id="calle"
                            label="Calle"
                            name="street"
                            autoComplete="calle"
                            value={values.street}
                            onChange={handleChange('street')}

                        />

                        <TextField

                            error={!!touched.state && !!errors.state}
                            helperText={!!touched.state && !!errors.state && errors.state}
                            onBlur={handleBlur}

                            size="small"
                            margin="normal"

                            fullWidth
                            id="state"
                            label="Estado"
                            name="state"
                            autoComplete="state"
                            value={values.state}
                            onChange={handleChange('state')}

                        />
                        <TextField
                            error={!!touched.city && !!errors.city}
                            helperText={!!touched.city && !!errors.city && errors.city}
                            onBlur={handleBlur}
                            size="small"
                            margin="normal"

                            fullWidth
                            id="city"
                            label="Ciudad"
                            name="city"
                            autoComplete="city"
                            value={values.city}
                            onChange={handleChange('city')}

                        />
                        <TextField

                            error={!!touched.cp && !!errors.cp}
                            helperText={!!touched.cp && !!errors.cp && errors.cp}
                            onBlur={handleBlur}
                            size="small"
                            margin="normal"


                            id="cp"
                            label="Codigo Postal"
                            name="cp"
                            autoComplete="cp"
                            value={values.cp}
                            onChange={handleChange('cp')}

                        />
                        <TextField
                            error={!!touched.telphone && !!errors.telphone}
                            helperText={!!touched.telphone && !!errors.telphone && errors.telphone}
                            onBlur={handleBlur}
                            size="small"
                            margin="normal"

                            fullWidth
                            id="telphone"
                            label="Telefono"
                            name="telphone"
                            autoComplete="telphone"
                            value={values.telphone}
                            onChange={handleChange('telphone')}

                        />
                        <TextField

                            error={!!touched.credit && !!errors.credit}
                            helperText={!!touched.credit && !!errors.credit && errors.credit}
                            onBlur={handleBlur}

                            size="small"
                            margin="normal"


                            id="credit"
                            label="Credito"
                            name="credit"
                            autoComplete="credit"
                            value={values.credit}
                            onChange={handleChange('credit')}

                        />
                        <TextField
                            error={!!touched.email && !!errors.email}
                            helperText={!!touched.email && !!errors.email && errors.email}
                            onBlur={handleBlur}
                            size="small"
                            margin="normal"

                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange('email')}

                        />

                        <TextField
                            error={!!touched.contact && !!errors.contact}
                            helperText={!!touched.contact && !!errors.contact && errors.contact}
                            onBlur={handleBlur}
                            size="small"
                            margin="normal"

                            fullWidth
                            id="contact"
                            label="Contacto"
                            name="contact"
                            autoComplete="contact"
                            value={values.contact}
                            onChange={handleChange('contact')}

                        />




                    </Grid>
                    <Grid item md={6} >

                        <Autocomplete
                            value={autoCompleteValue}
                            onChange={(event, newValue) => {

                                if (!newValue) {
                                    return setAutoCompleteValue(newValue);

                                }

                                setValues({ ...values, salesman: { ...values.salesman, uid: newValue.uid } });
                                setAutoCompleteValue(newValue.label);

                            }}
                            inputValue={values.salesman.fullName}

                            onInputChange={(event, newInputValue) => {

                                setValues({ ...values, salesman: { ...values.salesman, fullName: newInputValue } });
                            }}

                            isOptionEqualToValue={(option, value) => option.label === value}
                            disablePortal
                            id="combo-box-demo"
                            size="small"
                            fullWidth
                            options={options}

                            renderInput={(params) => <TextField required    {...params} label="Vendedor" />}
                        />

                        

                        <FormControlLabel
                            label="Activo"
                            control={

                                <Switch
                                    checked={values.active}
                                    onChange={handleChange('active')}
                                    inputProps={{ 'aria-label': 'controlled' }} />
                            }
                        >

                        </FormControlLabel>

                    </Grid>

                    <Grid item md={6}>

                        <Button
                            color={"primary"}

                            size={"small"}
                            startIcon={<SaveIcon />}
                            type="submit"

                            variant="contained"
                            className=""

                        >
                            Guardar
                        </Button>
                    </Grid>

                </Grid>

            </form>



        )}

        </Formik>

    )
}
