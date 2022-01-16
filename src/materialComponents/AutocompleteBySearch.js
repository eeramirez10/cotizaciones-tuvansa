import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchConToken } from '../helpers/fetch';
import Box from '@mui/material/Box';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export const AutocompleteBySearch = ({
    lineValues,
    setLineValues
}) => {

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    const [value, setValue] = useState(lineValues.codigo);

    const [inputValue, setInputValue] = useState(lineValues.codigo);

    const cotizacionesRow = JSON.parse(localStorage.getItem('cotizacionesRow')) || '';


    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleChange = (event, newValue) => {

        setLineValues({
            ...lineValues,
            codigo: newValue ? newValue.code : '',
            descripcion: newValue ? newValue.description : ''
        })
        setValue(newValue ? newValue.code : newValue)
    }


    const handleInputChange = async (event, newInputValue) => {



        setInputValue(newInputValue)

        if (!newInputValue) {
            return setOpen(false)
        }



        const resp = await fetchConToken('product', { search: newInputValue });
        const body = await resp.json();


        if (!body.ok) {

            return
        }


        const { product } = body;

        const products = product
            .map(product => ({ ...product, label: `${product.code}${product.description}${product.ean} ` }))
            .filter(({ code }) =>
                cotizacionesRow.length > 0 || cotizacionesRow
                    ?
                    !cotizacionesRow.some(exclude => exclude.codigo === code)
                    : code
            )










        if (products.length > 0) {

            setOpen(true)

        } else {
            setOpen(false)
        }

        setOptions([...products]);

    }

    const renderOption = (props, option) => (

        <Box component="li" sx={{ fontSize: 12, fontWeight: 100 }} {...props}>
            {option.code}  {option.description}   {option.ean}
        </Box>
    )




    return (

        <>

            <Autocomplete
                sx={{ width: '17ch' }}
                value={value}
                onChange={handleChange}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                open={open}
                renderOption={renderOption}

                isOptionEqualToValue={(option, value) => option.code === value}
                disablePortal
                // font size of input text


                size="small"

                options={options}



                renderInput={(params) =>
                    <TextField
                        style={{ width: '100%', fontSize:'10px' }}
                        size="small"
                        variant="standard"
                        InputLabelProps={{ style: { fontSize: 8 } }}

                        inputProps={{ style: { fontSize: 8 } }}
                        {...params}
                    />
                }
            />

        </>



    )
}
