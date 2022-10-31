import React from 'react'
import { Component } from 'react';
import '../styles/Style_table.css'
// para el sprint sirve, pero se debe llamar la bd
// botones sin funcionalidad, solo son visuales
var heading = ['Id', 'Nombre','Description','Price'];
var body =
    [
    ['GGOEAFKA087499','Cubo Rubik',' juego hungaro de rompecabezas ','2.99'],
    ['12345','telefono de juguete','juego para niños','1.59' ],
    ['6789','Balon de futbol','juego deportivo ','10.99' ],
    ['666777888','Tetris','juego de video','7.35'] 
    ];
export function ModificarProducto(){
    return (
      <body>
        
          <div class="text-center pt-5"> 
            <h1>Modifique su producto </h1>
            <p>seleccione productos a modificar</p>

          </div>
          <div class="content-table">
            <div class="text-center pt-5">  
              <Table heading={heading} body={body}/>    
              <br></br>   
              <button type="button" class="btn btn-success">Guardar</button>
              <button type="button" class="btn btn-warning">modificar</button>
              <button type="button" class="btn btn-danger">Eliminar</button> 
            </div>
            
          </div>


      </body>
      
      
    );
  }
  
  class Table extends Component {
    render() {

       //Vector y formatearlos para que react los conozca y los trate coomo un map
       //Map Coleecion no lineal

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
