import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
 
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text"></input>
                    <label>Apellido</label>    
                    <input type="text"></input>
                    <label>Cédula</label>    
                    <input type="text"></input>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-3">
                        <h1>Acta</h1>
                        <select>
                            <option>Seleccione</option>
                            <option>Nacimiento</option>
                            <option>Matrimonio</option>
                            <option>Divorcio</option>
                            <option>Defunción</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <h1>Tipo</h1>
                        <div className="row">
                            <div className="col">
                                <input type='checkbox' name="tipoActa"/>
                                <label>Inextensa</label>
                                <input type='checkbox' name="tipoActa" className="ml-2"/>
                                <label>Extensa</label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3">
                        <h1>Cantidad</h1>
                    </div>
                    <div className="col-3">
                        <h1>Precio</h1>
                    </div>
                </div>
            </div>
        )
        
    }

}
