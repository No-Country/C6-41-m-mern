import React, { Component } from 'react';
import axios from 'axios'

export default class VerProductos extends Component {
    
  
  state = {
    productos: [],
    arrayId: [],
    _id: '',
    id: '',
    nombre: '',
    categoria: '',
    precio: ''
  }

  onChangeId = e => {
    this.setState({
        id: e.target.value
    })
  }

  onChangeNombre = e => {
    this.setState({
      nombre: e.target.value
    })
  }
  
  onChangeCategoria = e => {
    this.setState({
      categoria: e.target.value
    })
  }

  onChangePrecio = e => {
    this.setState({
      precio: Number(e.target.value)
    })
  }

  remueveClaseActiva = () => {
    const allLi = document.querySelectorAll('li')
    allLi.forEach(elem => elem.classList.remove('active'));
  }

  clickLista = (e) => {
    this.remueveClaseActiva();
    e.currentTarget.classList.add("active");
    const texto = e.currentTarget.innerText;
    const prop = texto.split('\n');
    this.setState({
      _id: e.currentTarget.id,
      id: prop[0],
      nombre: prop[1],
      categoria: prop[2],
      precio: prop[3].slice(2)
  })
  }

  componentDidMount() {
    this.cargaItems();
  }

  async cargaItems() {
    const rta = await axios.get('http://localhost:3000/api/productos');
    rta.data.map(elem => this.state.arrayId.push(elem.id));
    const rtaOrdenada = rta.data.sort((a, b) => a.id - b.id);
    this.setState({productos: rtaOrdenada})
  }

  prevenirEnvio = (e) => {
    e.preventDefault()
  }

  manejarCambios = () => {
    const idActual = this.state.id
    const arrayBuscar = this.state.arrayId
    const existeElId = arrayBuscar.find(elem => (elem === Number(idActual)))
    if(existeElId){
      this.modificarProducto();
    }else{
      this.nuevoProducto();
    }
  }

  nuevoProducto = async() => {
  const confirmacion = window.confirm(`Esta seguro que desea crear el articulo ${this.state.nombre}`);
  if(confirmacion){
    await axios.post('http://localhost:3000/api/productos', 
                {
                  id: this.state.id,
                  nombre: this.state.nombre,
                  categoria: this.state.categoria,
                  precio: this.state.precio
                } );
    
    this.setState ({
      id: '',
      nombre: '',
      categoria: '',
      precio: ''
    })
    this.cargaItems();
  }}

modificarProducto = async() => {
  const confirmacion = window.confirm(`Esta seguro que desea modificar el articulo ${this.state.nombre}`);
  if(confirmacion){
    const actualizacion = {
      _id: this.state._id,
      id: this.state.id,
      nombre: this.state.nombre,
      categoria: this.state.categoria,
      precio: this.state.precio
    }
    await axios.put(`http://localhost:3000/api/productos/`, actualizacion);
    this.setState ({
        id: '',
        nombre: '',
        categoria: '',
        precio: ''
    })
    this.cargaItems();
    }}

eliminarProducto = async() => {
    const confirmacion = window.confirm(`Esta seguro que desea eliminar el articulo ${this.state.nombre}`);
    if(confirmacion){
      await axios.delete(`http://localhost:3000/api/productos/${this.state._id}`);
      this.cargaItems();
      this.setState ({
        _id: '',
        id: '',
        nombre: '',
        categoria: '',
        precio: ''
      })
    }
  }

  render () {
    return (
      <div className="container">
              <div className="row pt-4">
                <div className="col-5">
                    <div className="container">
                        <h3>Crear / Editar / Eliminar productos</h3>
                        <form onSubmit={this.prevenirEnvio}>
                            <div className="form-group">
                              <label>id</label>
                                  <input
                                      className="form-control"
                                      value={this.state.id}
                                      type="number"
                                      min="1"
                                      pattern="^[0-9]+"
                                      required
                                      onChange={this.onChangeId}
                                  />
                                
                                <label>Nombre</label>                                
                                  <input
                                      className="form-control"
                                      value={this.state.nombre}
                                      type="text"
                                      required
                                      onChange={this.onChangeNombre}
                                  />
                                  <label>Categoría</label>
                                  <input
                                      className="form-control"
                                      value={this.state.categoria}
                                      type="text"
                                      required
                                      onChange={this.onChangeCategoria}
                                  />
                                  <label>Precio $</label>
                                  <input
                                      className="form-control"
                                      value={this.state.precio}
                                      type="number"
                                      min="1"
                                      pattern="^[0-9]+"
                                      required
                                      onChange={this.onChangePrecio}
                                  />
                            </div>
                            <div className="row pt-4">
                                  <div className="col-6 text-center">
                                    <button type="submit" onClick={ this.manejarCambios } className="btn btn-primary">
                                      Guardar
                                    </button>
                                  </div>

                                  <div className="col-6 text-center">
                                    <button type="submit" onClick={ this.eliminarProducto }  className="btn btn-danger">
                                      Eliminar
                                    </button>
                                  </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-7">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-info">
                        <div className="row">
                            <div className="col-1">
                                Id
                            </div>
                            <div className="col-6">
                                Nombre
                            </div>
                            <div className="col-3">
                                Categoría
                            </div>
                            <div className="col-2 text-end">
                                Precio
                            </div>
                        </div>
                      </li>
                        {
                            this.state.productos.map(producto => (
                                <li className="list-group-item" id={ producto._id } onClick={ this.clickLista } >
                                  <div className="row">
                                    <div className="col-1">
                                      {producto.id}
                                    </div>
                                    <div className="col-6">
                                      {producto.nombre}
                                    </div>
                                    <div className="col-3">
                                      {producto.categoria}
                                    </div>
                                    <div className="col-2 text-end">
                                      $ {producto.precio}
                                    </div>
                                  </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
    </div>
    )
  }
}