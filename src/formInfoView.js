import React from 'react';
import { BrowserRouter as Router, Route } from 'react-dom';

 function FormInfo(props)  {
     console.log(props);
      return(
            <div>
                <div className="row">
                    <div className="col-2">
                        <h3>{props.datos.nombre}</h3>
                        <h3>{props.datos.apellido}</h3>
                    </div>
                    <div className="col-2">
                        <h3>{props.datos.segundoNombre}</h3>
                        <h3>{props.datos.segundoApellido}</h3>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <h3>{props.datos.cedula}</h3>
                    </div>
                </div>
            </div>
        );
        
    }

    export default FormInfo;