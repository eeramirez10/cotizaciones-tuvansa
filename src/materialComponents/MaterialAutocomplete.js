import React, { useEffect, useState } from 'react'

import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import { fetchConToken } from '../helpers/fetch';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export const MaterialAutocomplete = ({ endpoint, label, defaultValue, setFormValues }) => {

    const [values, setValues] = useState(defaultValue || { uid: '', name: '' });
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;


    useEffect(() => {
        setFormValues(v => ({
            ...v,
            ...values
        }))

    }, [values])

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3); // For demo purposes.

            if (active) {

                const resp = await fetchConToken(endpoint);
                const body = await resp.json();


                const data = body[endpoint]
                    .map(values =>
                    ({
                        uid: values.uid, 
                        name: endpoint == 'salesman' ? values.fullName : values.name
                    }))
                    .filter(values => values.name)

                setOptions([...data]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);




    return (
        <Autocomplete
            value={values}
            sx={{ mt: 2, width: 350 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={
                (n, value) =>
                    value
                        ? setValues({ ...values, ...value })
                        : setValues({ uid: '', name: '' })
            }

            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            size="small"
            defaultValue={defaultValue}
            margin="normal"
            renderInput={(params) => (
                <TextField

                    {...params}
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    )
}
