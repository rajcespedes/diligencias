import React from 'react';

function actasList(props) {

    return(
        <div>
            <div className="row">
                <div className="col">
                    <label>Acta</label>
                </div>
                <div className="col">
                    <label>Tipo</label>
                </div>
                <div className="col">
                    <label>Cantidad</label>
                </div>
                <div className="col">
                    <label>Precio</label>
                </div>
                <div className="col">
                    <label>Total</label>
                </div>
            </div>
        </div>
    );

}


export default actasList;