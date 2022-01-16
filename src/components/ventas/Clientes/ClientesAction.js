import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useEffect, useState } from 'react'

import { useHistory, useParams } from 'react-router-dom'
import { TabPanel } from '../../../materialComponents/TabPanel';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ListAltIcon from '@mui/icons-material/ListAlt';

import { fetchConToken } from '../../../helpers/fetch';
import { Log } from '../../shared/Log';
import { ClienteForm } from './ClienteForm';
import LinearProgress from '@mui/material/LinearProgress';



export const ClienteAction = () => {

    const history = useHistory();

    const { clienteUid } = useParams()

    const [value, setValue] = useState(0)

    const [autoCompleteValue, setAutoCompleteValue] = useState('')


    const handleChangeSection = (event, newValue) => {
        setValue(newValue)
    }

    const a11yProps = (index) => ({
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    });


    const [initialValues, setInitialValues] = useState({
        uid: '',
        name: '',
        code: '',
        street: '',
        city: '',
        state: '',
        telphone: '',
        contact: '',
        credit: '',
        cp: '',
        rfc: '',
        email: '',
        createdAt: "",
        updatedAt: "",
        salesman: {
            uid: '',
            fullName: '',
        },
        customerLog: '',
        active: true
    });




    useEffect(() => {


        const loadCustomer = async () => {

            const resp = await fetchConToken(`customer/${clienteUid}`);

            const { customer } = await resp.json();

            setInitialValues(v => ({ ...v, ...customer, }))

            setAutoCompleteValue(customer.salesman.fullName)

        }


        if (clienteUid) {
            loadCustomer()
        }




    }, [clienteUid]);


    return (

        <>

            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <h3 className="mr-auto"> {clienteUid ? initialValues.name : 'Nuevo'} </h3>
                            <Button
                                size={"small"}
                                startIcon={<ListAltIcon />}
                                onClick={() => {
                                    history.goBack()

                                }}
                                variant="outlined"
                                className="mr-1"

                            >
                                Listado
                            </Button>

                            <Button
                                color={"primary"}

                                size={"small"}
                                startIcon={<SaveIcon />}
                                type="submit"

                                variant="contained"
                                className=""

                            >
                                Guardar
                            </Button>
                        </div>

                    </div>
                </div>
            </div>




            <div className="col-12">
                <div className="card">
                    <div className="card-body">

                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChangeSection} aria-label="basic tabs example">
                                    <Tab label="Cliente"   {...a11yProps(0)} />
                                    <Tab label="Cliente 2"   {...a11yProps(1)} />
                                    <Tab label="Cliente 3" {...a11yProps(2)} />
                                </Tabs>

                            </Box>

                            <TabPanel value={value} index={0}>


                                {

                                    !clienteUid
                                        ?
                                        <ClienteForm
                                            initialValues={initialValues}
                                            autoCompleteValue={autoCompleteValue}
                                            setAutoCompleteValue={setAutoCompleteValue}
                                        />
                                        :
                                        !initialValues.name
                                            ?
                                            <LinearProgress />
                                            :
                                            <ClienteForm
                                                initialValues={initialValues}
                                                autoCompleteValue={autoCompleteValue}
                                                setAutoCompleteValue={setAutoCompleteValue}

                                            />

                                }



                            </TabPanel>
                            <TabPanel value={value} index={1}>



                            </TabPanel>

                            <TabPanel value={value} index={2}>


                            </TabPanel>
                        </Box>



                    </div>
                </div>
            </div>


            <div className="col-12">
                <div className="card">
                    <div className="card-body">

                        <Log customerLog={initialValues.customerLog} />

                    </div>
                </div>
            </div>
        </>

    )
}
