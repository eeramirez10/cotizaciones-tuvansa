import MaterialTable from 'material-table'
import React from 'react'

export const Material = () => {
    return (

        <>
            <div>
                <h3> Material Table</h3>
            </div>

            <MaterialTable
                title="Remote data"
                columns ={[
                    {
                        title:'name',
                        field:'name'
                    },
                    {
                        title:'Usuario',
                        field:'user.name'
                    }
                ]}
                
                data = {
                    query => 
                    new Promise((resolve, reject) => {
                        
                        let url = 'http://localhost:4000/api/task?'
                        url += `size=${query.pageSize}`
                        url += `&page=${(query.page + 1)}`
                        
                        console.log(query)
                        fetch(url)
                            .then(response => response.json())
                            .then( ({ task }) =>{
                                
                                resolve({
                                    data: task.rows,
                                    page: task.page - 1,
                                    totalCount: task.total
                                })
                                
                            })
                    })
                }
            />
        </>

    )
}
