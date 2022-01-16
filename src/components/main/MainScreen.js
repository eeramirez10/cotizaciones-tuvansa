import { TablePagination } from '@material-ui/core'
// import { PaginationItem } from '@material-ui/lab'
import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { useTable } from 'react-table'

import { fetchSinToken } from '../../helpers/fetch'




export const MainScreen = () => {


    const [tasks, setTasks] = useState([])

    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    

    let i = 0;

    const columns = useMemo(
        () => [
            {
                Header:'id',
                Cell: (row)=>{
                    
                    
                    return i++;
                }
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'usuario',
                accessor: 'user.name'

            },
        ],
        [i]
    )

    const getRequestParams = (searchTitle, page  , pageSize) => {
        let params = {};

        if (searchTitle) {
            params["title"] = searchTitle;
        }

        if (page) {
            params["page"] = page;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    };

    const getTasks = async () => {

        const params = getRequestParams(null, page, pageSize);
        console.log(params);

        const resp = await fetchSinToken(`task`, params);
        const { task } = await resp.json()

        const { tutorials, totalPages, totalItems } = task;

        setTasks(tutorials)
        setCount(totalItems)



    }



    useEffect(() => getTasks(), [pageSize, page])

    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data: tasks,
    });



    const handlePageChange = (event, value) => {
        setPage(value);
    }

    const handlePageSizeChange = ({ target }) => {
        setPageSize(Number(target.value))
        setPage(1);
    }


    const handleChangePage = (e, newPage) => {
        console.log( 'newPage',newPage)
        setPage( newPage );


    }



    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));

        setPageSize(event.target.value)
        setPage(0);
    }







    return (


        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                    // value={searchTitle}
                    // onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                        // onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-md-12 list">

                

                <table
                    className="table table-striped table-bordered"
                    {...getTableProps()}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row, i) => {
                            prepareRow(row);
                            
                            return (
                                <tr  {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td  {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <TablePagination
                    component="div"
                    count={count}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[1,2, 3, 6, 9, { label: 'All', value: -1 }]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    SelectProps={{
                        inputProps: {
                          'aria-label': 'Filas por paginas',
                        },
                        native: false,
                      }}
                    
                />
            </div>

            {/* <div className="col-md-8">
                <button className="btn btn-sm btn-danger" onClick={removeAllTutorials}>
                    Remove All
                </button>
            </div> */}
        </div>



    )
}
