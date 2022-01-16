export const tableTypes = {
    clientes: {
        table: 'customer',
        columns: [
            {
                id: 'name',
                label: 'Nombre',
                minWidth: 170,
                align: 'left',

            },
            {
                id: 'telphone',
                label: 'Telefono',
                minWidth: 170,
                align: 'left',
                // format: (value) => value.toFixed(2),
            },
            {
                id: 'rfc',
                label: 'RFC',
                minWidth: 170,
                align: 'left',
                // format: (value) => value.toFixed(2),
            },
        ]
    },
    usuarios:{
        table: 'user',
        columns: [
            {
                id: 'name',
                label: 'Nombre',
                minWidth: 170,
                align: 'left',

            },
            {
                id: 'lastname',
                label: 'Apellido',
                minWidth: 170,
                align: 'left',
                // format: (value) => value.toFixed(2),
            }
        ]

    }

}