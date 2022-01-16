import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'

import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from './helpers/snackbar';



export const ErpApp = () => {
    return (
        <Provider store={store}>
            <SnackbarProvider >
                <SnackbarUtilsConfigurator/>
                <AppRouter />
            </SnackbarProvider>

        </Provider>
    )
}
