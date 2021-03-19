import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeCedula = this.onChangeCedula.bind(this);
        this.onChangeActa = this.onChangeActa.bind(this);

        this.state = {
            name: '',
            lastname: '',
            cedula: '',
            acta: ''
        };
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeCedula(e) {
        this.setState({
            cedula: e.target.value
        });
    }

    onChangeActa(e) {
        this.setState({
            acta: e.target.value
        });
    }
 
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" onChange={this.onChangeName}></input>
                    <label>Apellido</label>    
                    <input type="text" onChange={this.onChangeLastName}></input>
                    <label>Cédula</label>    
                    <input type="text" onChange={this.onChangeCedula}></input>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-2">
                        <h1>Acta</h1>
                        <select onChange={this.onChangeActa}>
                            <option>Seleccione</option>
                            <option>Nacimiento</option>
                            <option>Matrimonio</option>
                            <option>Divorcio</option>
                            <option>"Defunción</option>
                        </select>
                    </div>
                    <div className="col-2">
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
                    <div className="col-2">
                        <h1>Cantidad</h1>
                        <input type="number"/>
                    </div>
                    <div className="col-2">
                        <h1>Precio</h1>
                        <input type="number" disabled />
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <button className="btn btn-success">Agregar</button>

                    </div>
                </div>
                <div>
                    <h1>Solicitudes agregadas</h1>
                    <p >{this.state.name}</p>
                    <p >{this.state.lastname}</p>
                    <p >{this.state.cedula}</p>
                    <p >{this.state.acta}</p>
                </div>
            </div>
        )
        
    }

}
