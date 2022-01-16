import { Button, FormControl, Grid, InputAdornment, } from '@mui/material';
import TextField from '@mui/material/TextField';


import SaveIcon from '@mui/icons-material/Save';
import { useEffect, useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AutocompleteBySearch } from '../../../materialComponents/AutocompleteBySearch';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const initialValues = {

    codigo: '',
    descripcion: '',
    cantidad: 1,
    precio: '0.00',
    descuento: '0.00',
    iva: '0.00',
    importe: '0.00'
}

export const CotizacionesLine = () => {

    const [lineValues, setLineValues] = useState(initialValues);

    const [rows, setRows] = useState(JSON.parse(localStorage.getItem('cotizacionesRow')) || [])

    const [edit, setEdit] = useState(false)

    const [selected, setSelected] = useState('')


    const handleChangeLines = (prop) => ({ target }) => {

        setLineValues({
            ...lineValues,
            [prop]: target.value
        })

        if (prop === 'iva') {
            setLineValues({
                ...lineValues,
                [prop]: target.value,
                importe: ((((lineValues.cantidad * lineValues.precio) * target.value) / 100) + (lineValues.cantidad * lineValues.precio)).toFixed(2)
            })

        }

        if (prop === 'cantidad' && target.value < 1) {
            setLineValues({
                ...lineValues,
                [prop]: 1,

            })

        }



    }

    const handleOnFocus = ({ target }) => {
        setLineValues({
            ...lineValues,
            [target.name]: ''
        })
    }

    const handleChangeRows = (prop, index) => ({ target }) => {

        // console.log(prop, index)

        // setRows([...rows])
    }

    const handleBlur = () => {

        if (lineValues.importe > 0) {

            setRows([...rows, lineValues]);

            setLineValues(initialValues);

            localStorage.setItem('cotizacionesRow', JSON.stringify([...rows, lineValues]))

        }

    }

    const hadleDelete = (codigo) => (event) => {

        const newRows = rows.filter(product => product.codigo !== codigo);

        setRows(newRows)
        localStorage.setItem('cotizacionesRow', JSON.stringify([...newRows]))
    }


    useEffect(() => {
        if (!edit) {
            setSelected('')
        }
    }, [edit]);




    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">  Lineas </h5>
                <div className="d-flex">

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 750 }} size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Codigo</TableCell>
                                    <TableCell>Descripcion</TableCell>
                                    <TableCell >Cantidad</TableCell>
                                    <TableCell >Precio</TableCell>
                                    <TableCell >Descuento</TableCell>
                                    <TableCell >IVA</TableCell>
                                    <TableCell >Importe</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow

                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    color="primary"
                                >
                                    <TableCell>



                                        <AutocompleteBySearch

                                            lineValues={lineValues}
                                            setLineValues={setLineValues}
                                        />





                                    </TableCell>

                                    <TableCell sx={{ fontSize: 12 }} >

                                        {lineValues.descripcion}

                                    </TableCell>

                                    <TableCell >

                                        <TextField

                                            value={lineValues.cantidad}
                                            onChange={handleChangeLines('cantidad')}
                                            inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }}

                                            variant="standard"
                                            size="small"
                                            sx={{ m: 0, width: '5ch' }}

                                            type="number"
                                        />

                                    </TableCell>
                                    <TableCell >

                                        <TextField

                                            value={lineValues.precio}
                                            onChange={handleChangeLines('precio')}
                                            variant="standard"
                                            size="small"
                                            sx={{ m: 0, width: '10ch' }}
                                            inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }}

                                            onFocus={handleOnFocus}
                                            name="precio"
                                            InputProps={{

                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}

                                        />

                                    </TableCell>
                                    <TableCell >

                                        <TextField
                                            inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }}
                                            value={lineValues.descuento}
                                            onChange={handleChangeLines('descuento')}
                                            variant="standard"
                                            size="small"
                                            sx={{ m: 0, width: '8ch' }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                            }}
                                        // onFocus={(i)=>{
                                        //     console.log(i)
                                        // }}


                                        />
                                    </TableCell>
                                    <TableCell >

                                        <TextField
                                            inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }}
                                            value={lineValues.iva}
                                            onChange={handleChangeLines('iva')}
                                            variant="standard"
                                            size="small"
                                            sx={{ m: 0, width: '8ch' }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                            }}

                                        />
                                    </TableCell>
                                    <TableCell >

                                        <TextField
                                            inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }}
                                            value={lineValues.importe.toLocaleString('en-US')}
                                            onChange={handleChangeLines('importe')}
                                            variant="standard"
                                            size="small"
                                            sx={{ m: 0, width: '9ch' }}
                                            InputProps={{
                                                readOnly: true,
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                            onBlur={handleBlur}

                                        />
                                    </TableCell>

                                </TableRow>

                                {
                                    rows.map((row, i) => (

                                        <TableRow
                                            hover
                                            key={row.codigo}

                                        >
                                            <TableCell >

                                                {
                                                    edit && i === selected ?


                                                        <FormControl sx={{ width: '10ch' }} variant="outlined">

                                                            <TextField

                                                                inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }} // font size of input text

                                                                value={row.codigo}
                                                                onChange={handleChangeRows('codigo', i)}
                                                                multiline={true}

                                                                size="small"
                                                                variant="standard"

                                                            />
                                                        </FormControl>



                                                        :
                                                        row.codigo

                                                }


                                            </TableCell>
                                            <TableCell >


                                                <FormControl sx={{ fontSize: 12 }} >


                                                    {row.descripcion}
                                                </FormControl>





                                            </TableCell>
                                            <TableCell >

                                                {
                                                    edit && i === selected
                                                        ?

                                                        <FormControl sx={{ width: '5ch' }} variant="outlined">

                                                            <TextField
                                                                inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }} // font size of input text
                                                                value={row.cantidad}
                                                                onChange={handleChangeRows('weight')}
                                                                variant="standard"
                                                                size="small"


                                                                type="number"
                                                            />
                                                        </FormControl>

                                                        :
                                                        row.cantidad

                                                }




                                            </TableCell>
                                            <TableCell >


                                                {
                                                    edit && i === selected
                                                        ?

                                                        <FormControl sx={{ width: '8ch' }} variant="outlined">

                                                            <TextField
                                                                inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }} // font size of input text

                                                                value={row.precio}
                                                                onChange={handleChangeRows('weight')}
                                                                variant="standard"
                                                                size="small"


                                                                InputProps={{

                                                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                                }}

                                                            />
                                                        </FormControl>

                                                        :
                                                        row.precio

                                                }



                                            </TableCell>
                                            <TableCell >


                                                {
                                                    edit && i === selected
                                                        ?

                                                        <FormControl sx={{ width: '8ch' }} variant="outlined">

                                                            <TextField
                                                                inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }} // font size of input text

                                                                value={row.descuento}
                                                                onChange={handleChangeRows('weight')}
                                                                variant="standard"
                                                                size="small"

                                                                InputProps={{
                                                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                                                }}

                                                            />
                                                        </FormControl>

                                                        :
                                                        row.descuento

                                                }


                                            </TableCell>
                                            <TableCell >


                                                {
                                                    edit && i === selected
                                                        ?

                                                        <FormControl sx={{ width: '8ch' }} variant="outlined">


                                                            <TextField
                                                                inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }} // font size of input text

                                                                value={row.iva}
                                                                onChange={handleChangeRows('weight')}
                                                                variant="standard"
                                                                size="small"

                                                                InputProps={{
                                                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                                                }}

                                                            />
                                                        </FormControl>

                                                        :
                                                        row.iva

                                                }


                                            </TableCell>
                                            <TableCell >

                                                {
                                                    edit && i === selected
                                                        ?

                                                        <FormControl sx={{ m: 0, width: '8ch' }} variant="outlined">


                                                            <TextField
                                                                inputProps={{ style: { fontSize: 14, margin: 0, height: 18 } }} // font size of input text

                                                                value={row.importe}
                                                                onChange={handleChangeRows('weight')}
                                                                variant="standard"
                                                                size="small"

                                                                InputProps={{
                                                                    readOnly: true,
                                                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                                }}

                                                            />
                                                        </FormControl>

                                                        :
                                                        row.importe

                                                }

                                            </TableCell>

                                            <TableCell >
                                                <IconButton
                                                    size="small"
                                                    aria-label="delete"
                                                    color="error"
                                                    onClick={hadleDelete(row.codigo)}

                                                >
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>

                                                <IconButton
                                                    size="small"
                                                    aria-label="delete"
                                                    color="warning"
                                                    onClick={() => { setEdit(!edit); setSelected(i); }}
                                                >
                                                    <EditIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>



                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        </div>
    )
}
