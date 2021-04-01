import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInfo from './formInfoView';
import actasList from './actasList';

export default class Home extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeCedula = this.onChangeCedula.bind(this);
        this.onChangeActa = this.onChangeActa.bind(this);
        this.onChangeSecondName = this.onChangeSecondName.bind(this);
        this.onChangeSecondLastName = this.onChangeSecondLastName.bind(this);

        this.state = {
            name: '',
            secondName: '',
            lastname: '',
            secondLastname: '',
            cedula: '',
            acta: ''
        };
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeSecondName(e){
        this.setState({
            secondName: e.target.value    
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeSecondLastName(e){
        this.setState({
            secondLastname: e.target.value
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
                    <label>Segundo Nombre</label>
                    <input type="text" onChange={this.onChangeSecondName} />
                    <label>Apellido</label>    
                    <input type="text" onChange={this.onChangeLastName}></input>
                    <label>Segundo Apellido</label>
                    <input type="text" onChange={this.onChangeSecondLastName} />
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
                            <option>Defunción</option>
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
                    < FormInfo datos={ {
                        nombre: this.state.name,
                        segundoNombre: this.state.secondName,
                        apellido: this.state.lastname,
                        segundoApellido: this.state.secondLastname,
                        cedula: this.state.cedula
                     } }/>
                </div>
            </div>
        )
        
    }

}