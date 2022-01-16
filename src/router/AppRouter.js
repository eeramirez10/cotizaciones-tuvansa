import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

} from 'react-router-dom';
import { startCheking } from '../actions/auth';
import { AuthScreen } from '../components/auth/AuthScreen';
import { useScript } from '../hooks/useScript';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const { checking, uid } = useSelector(selector => selector.auth);




    useEffect(() => {

        dispatch(startCheking())

    } , [dispatch])

    if(checking){

        return (
            <h5> Espere... </h5>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route exact path="/login"  component={ AuthScreen }/>
                    <Route  path="/"  component={ DashboardRoutes }/>
                    <Redirect to="/" /> */}

                    <PublicRoute exact path="/login" component={AuthScreen} isLoggedIn={!!uid} />
                    <PrivateRoute path="/" component={DashboardRoutes} isLoggedIn={!!uid} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>

    )
}
