import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { transformPath } from '../../helpers/transformPath';

export const NavigationScreen = () => {

    const history = useHistory();

    const { pathname } = useLocation()

    
    const handleClick = () => history.push(`${pathname}/new`);


    return (
        <div className="col-12">
            <div className="card">
                <div className="card-body">

                    <div className="d-flex">
                        <h3>{`${pathname.charAt(1).toUpperCase()}${pathname.substring(2)}`} </h3>
                        <button
                            onClick={handleClick}
                            className="btn btn-primary ml-auto"> Nuevo</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
