import { NavigationScreen } from "../../shared/NavigationScreen";
import { TableMaterial } from "../../shared/TableMaterial";

export const ClientesScreen = () => {


    

    return (

        <>

            <NavigationScreen /> 


            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h3> Clientes </h3>

                        <TableMaterial/>
                        
                    </div>
                </div>
            </div>

        </>
    )

}