import React from 'react'
import { Component  } from "react";
import '../styles/Tabla_Carrito.css';

var heading = ['Id Producto', 'Nombre Producto', 'Descripcion Producto', 'Valor Unitario'];



var body =
    [
        ['0001', 'Producto 1', 'Unidades dependiendo Producto','10']

    ];


export function Carrito() {

  return (
    <body>
          <div class="text-center pt-5"> 
              <h3>Lista de Compras</h3>
              <br></br>
              <div >
              <Table heading={heading} body={body}/>  
              </div>
              <h4>Total de la Venta</h4>
              <button>Confirme su Compra</button>
          </div>
    </body>
      
  );

}

class Table extends Component {
  render() {

      
      

      var heading = this.props.heading;
      var body = this.props.body;

      return (
          <div id="datagrid">
              <table>
                  <thead>
                      <tr>
                          {heading.map(head => <th>{head}</th>)}
                      </tr>
                  </thead>
                  <tbody>
                      {body.map(row => <TableRow row={row} />)}
                  </tbody>
              </table>


          </div>
      );

  }
}

class TableRow extends Component {
  render() {
      var row = this.props.row;
      return (
          <tr>
              {row.map(val => <td>{val}</td>)}
          </tr>
      )
  }
}