import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LinearProgress from '@mui/material/LinearProgress';

import { requestParams } from '../../helpers/requestParams';
import { Link, useLocation } from 'react-router-dom';
import { tableStartLoaded } from '../../actions/table';



export const TableMaterial = () => {

    const dispatch = useDispatch()

    const { pathname } = useLocation();



    const { data, columns } = useSelector(s => s.table);

    const { rows, total } = data;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {

        const params = requestParams(null, page + 1, rowsPerPage)

        dispatch(tableStartLoaded(pathname.substring(1), params))


    }, [page, rowsPerPage, dispatch, pathname])





    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);


    };



    return (

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            {!rows && <LinearProgress />}

            <TableContainer sx={{ maxHeight: 440 }}>


                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}


                        </TableRow>


                    </TableHead>





                    <TableBody >


                        {
                            rows
                            &&
                            rows
                                .map((row) => {

                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {
                                                columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (

                                                        <TableCell key={column.id} align={column.align}>
                                                            {
                                                                column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : column.id === 'rfc' || column.id === 'name' ?
                                                                        <Link to={`./${pathname.substring(1)}/edit/${row.uid}`}> {value} </Link>
                                                                        : value

                                                            }
                                                        </TableCell>
                                                    );
                                                })}
                                        </TableRow>
                                    );
                                })}
                    </TableBody>



                </Table>


            </TableContainer>


            <TablePagination
                rowsPerPageOptions={[2, 4, 5, 10, 15]}
                component="div"
                count={total ? total : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />






        </Paper>
    )
}
