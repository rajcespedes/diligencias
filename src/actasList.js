import React from 'react';

function actasList(props) {

    return(
        <div>
            <div className="row">
                <div className="col">
                    <p>{props.acta}</p>
                </div>
                <div className="col">
                    <p>{props.tipoActa == "400" ? "Inextensa" : "Extensa"}</p>
                </div>
                <div className="col">
                    <p>{props.cantidad}</p>
                </div>
                <div className="col">
                    <p>{props.tipoActa}</p>
                </div>
                <div className="col">
                    <p>{props.tipoActa == "400" ? props.cantidad * 400 : props.cantidad * 500}</p>
                </div>
            </div>
            <div>
                <div className="row">
                    {/* <h3>{}</h3> */}
                </div>
            </div>
        </div>
    );

}


export default actasList;