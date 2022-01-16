import React from 'react'
import { Header } from '../components/ui/Header'
import { LeftSideBar } from '../components/ui/LeftSideBar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from 'react-router-dom';
import { MainScreen } from '../components/main/MainScreen';
import { BreadCrumb } from '../components/ui/BreadCrumb';

import { Material } from '../components/Table/Material';



import {  ClientesScreen } from '../components/ventas/Clientes/ClientesScreen';

import { useScript } from '../hooks/useScript';
import { ClienteAction } from '../components/ventas/Clientes/ClientesAction';
import { CotizacionesScreen } from '../components/ventas/Cotizaciones/CotizacionesScreen';
import { CotizacionesAction } from '../components/ventas/Cotizaciones/CotizacionesAction';

export const DashboardRoutes = () => {

    useScript('assets/plugins/jquery/jquery.min.js')
    useScript('assets/plugins/bootstrap/js/popper.min.js')
    useScript('assets/plugins/bootstrap/js/bootstrap.min.js')
    useScript('js/perfect-scrollbar.jquery.min.js')
    useScript('js/waves.js')
    useScript('js/sidebarmenu.js')
    useScript('assets/plugins/sticky-kit-master/dist/sticky-kit.min.js')
    useScript('assets/plugins/sparkline/jquery.sparkline.min.js')
    useScript('js/custom.min.js')
    useScript('assets/plugins/styleswitcher/jQuery.style.switcher.js')
    
    return (
        <>
            <Header />
            <LeftSideBar />


            <div className="page-wrapper">


                <div className="container-fluid">

                    <BreadCrumb />

                    <div className="row">



                        <Switch>

                            {/* <Route  path="/table" components={ TableExample }/> */}
                            <Route exact path="/main" component={MainScreen} />
                            <Route exact path="/material" component={Material} />
                            
                            <Route exact path="/cotizaciones" component={CotizacionesScreen} />
                            <Route exact path="/cotizaciones/new" component={ CotizacionesAction } />

                            <Route exact path="/clientes" component={ ClientesScreen } />
                            <Route exact path="/clientes/new" component={ ClienteAction } />
                            <Route exact path="/clientes/edit/:clienteUid" component={ ClienteAction } />
                           
                          

                        </Switch>


                    </div>

                </div>
            </div>


        </>
    )
}
