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
        this.onChangeSecondName = this.onChangeSecondName.bind(this);
        this.onChangeSecondLastName = this.onChangeSecondLastName.bind(this);
        this.onChangeTipoActa = this.onChangeTipoActa.bind(this);
        this.onChangeCantidad = this.onChangeCantidad.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);

        this.state = {
            name: '',
            secondName: '',
            lastname: '',
            secondLastname: '',
            cedula: '',
            acta: '',
            tipoActa: '',
            cantidad: 1,
            subtotal: 0
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


    onChangeTipoActa(e){

        this.setState({
            acta: e.target.value
        });
    }

    onChangeCantidad(e){

        this.setState({
            cantidad: e.target.value,
            // acta: 
                // (this.state.acta <= 0) ? 1 * this.state.cantidad :      
            subtotal: this.state.acta * this.state.cantidad
        });

        alert(this.state.subtotal);

    }

    onHandleSubmit(e){
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input onChange={this.onChangeName}  type="text" ></input>
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
                                <input type='radio' name="tipoActa" value="400" className="mr-1"  onChange={this.onChangeTipoActa}/>
                                Inextensa
                                <input type='radio' name="tipoActa" className="ml-2 mr-1" value="500" onChange={this.onChangeTipoActa}/>
                                Extensa
                            </div>     
                        </div>
                    </div>
                    <div className="col-2">
                        <h1>Cantidad</h1>
                        <input type="number" min="1" placeholder="0" onChange={this.onChangeCantidad}/>
                    </div>
                    <div className="col-2">
                        <h1>Precio</h1>
                        <input value={ this.state.acta } type="number" disabled />
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <input type="submit"  className="btn btn-success" value="Agregar"/>

                    </div>
                </div>
                </form>
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