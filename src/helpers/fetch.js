

export const fetchSinToken = (endpoint, params, data, method = 'GET') => {

    params = params ? `?${new URLSearchParams(params)}` : '';

    const url = `http://localhost:4000/api/${ endpoint }${ params }`

    if (method === 'GET') {


        return fetch(url);

    }

    return fetch( url , {
        method,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });




}

export const fetchConToken = (endpoint, params, data='', method = 'GET') => {

    params = params ? `?${new URLSearchParams(params)}` : '';

    const url = `http://localhost:4000/api/${ endpoint }${ params }`;

    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {


        return fetch(url,{
            method,
            headers: {
                'x-token': token
            }
        });

    }

    return fetch( url , {
        method,
        headers:{
            'Content-Type': 'application/json',
            'x-token': token
        },
        body: JSON.stringify(data)
    });




}