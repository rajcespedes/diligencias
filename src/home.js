import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormInfo from './formInfoView';
import ActasList from './actasList';

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
        this.onChangeActa = this.onChangeActa.bind(this);

        this.state = {
            name: '',
            secondName: '',
            lastname: '',
            secondLastname: '',
            cedula: '',
            acta: '',
            tipoActa: '',
            cantidad: 1,
            component: []
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

    onChangeActa(e){
        this.setState({
            acta: e.target.value
        });
    }


    onChangeTipoActa(e){

        this.setState({
            tipoActa: e.target.value
        });
    }

    onChangeCantidad(e){

        this.setState( {
            cantidad: e.target.value
            // acta: 
                // (this.state.acta <= 0) ? 1 * this.state.cantidad :      
            // subtotal: this.state.acta * this.state.cantidad
        });

        // alert(this.state.cantidad);

    }

    onHandleSubmit(e){
        e.preventDefault();
        // console.log(e);
        // this.setState({
        //     component: <ActasList name={this.state.nombre}/>

        // });
        var addComponent = this.state.component;
        addComponent.push(
            <ActasList 
                key={addComponent.length}
                name={this.state.name} 
                acta={this.state.acta} 
                cantidad={this.state.cantidad} 
                tipoActa={this.state.tipoActa}
                subtotal={this.state.precio * this.state.cantidad}
                />
        );
        this.setState({ component: addComponent });

        // alert({actasList});
    }

    render() {
        return (
            <div className="container">
                <form >
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
                        <input type="number" min="1" placeholder="1" onChange={this.onChangeCantidad}/>
                    </div>
                    <div className="col-2">
                        <h1>Precio</h1>
                        <input value={ this.state.tipoActa } type="number" disabled />
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <input type="submit"  className="btn btn-success" value="Agregar" onClick={this.onHandleSubmit}/>

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
                        <label>Subtotal</label>
                    </div>
                </div> 
                <div>
                    {this.state.component}
                </div>
            </div>
        )
        
    }

}