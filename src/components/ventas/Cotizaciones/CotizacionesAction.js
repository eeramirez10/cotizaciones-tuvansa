
import { Button } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';

import { useHistory} from 'react-router-dom'

import SaveIcon from '@mui/icons-material/Save';

import { CotizacionForm } from './CotizacionForm';
import { CotizacionesLine } from './CotizacionesLine';

export const CotizacionesAction = () => {

    const history = useHistory();


    return (

        <>

            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <h3 className="mr-auto"> Nuevo </h3>
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

                <CotizacionForm
                    // onSubmit = {
                    //     ( submision ) =>{
                    //         console.log(submision)
                    //     }
                    // }
                />

            </div>


            <div className="col-12">
                <CotizacionesLine />
            </div>

            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">  Total </h5>
                        <div className="d-flex">

                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}
