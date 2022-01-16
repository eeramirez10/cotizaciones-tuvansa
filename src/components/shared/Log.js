import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { fetchConToken } from '../../helpers/fetch';
import { useEffect } from 'react';




export const Log = ({ customerLog }) => {

    const { createdBy, updatedBy, createdAt, updatedAt } = customerLog;

    const [userCrated, setUserCrated] = useState({});

    const [userUpdated, setUserUpdated] = useState({})



    useEffect(() => {

        const getUser = async () => {

            const respCreated = await fetchConToken(`user/${createdBy}`);
            const { user: created } = await respCreated.json();

            setUserCrated(created);

            const respUpdated = await fetchConToken(`user/${updatedBy}`);
            const { user: updated } = await respUpdated.json();

            setUserUpdated(updated);




        }

        if (customerLog) {
            getUser()
        }



    }, [customerLog, createdBy, updatedBy]);


 

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Auditoria</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Creado por: {userCrated?.name}  {createdAt}
                    </Typography>

                    { 
                        userUpdated &&

                        < Typography >
                            Actualizado por:  {userUpdated.name} {updatedAt}
                        </Typography>

                    }



                </AccordionDetails>
            </Accordion>



        </div >
    )
}
