import React from 'react'
import { Component } from 'react';
import '../styles/Style_img.css'
import '../styles/Style_table.css'
var heading = ['Key', 'Descripcion'];

//var heading = titulos a la tabla 
//var body = cuerpo de  a la tabla
//para el sprint sirve pero hay que cambiar por un ciclo cuando tenga funcionalidad 

var body =
    [
    ['Id', 'GGOEAFKA087499'],
    ['Nombre', 'Cubo Rubik'],
    ['Description', ' juego hungaro de rompecabezas '],
    ['Price','2.99']
 
    ];
var body2 =
    [
    ['Id', '12345'],
    ['Nombre', 'telefono de juguete'],
    ['Description', ' juego para niños '],
    ['Price','1.59']
 
    ];
    var body3 =
    [
    ['Id', '6789'],
    ['Nombre', 'Balon de futbol'],
    ['Description', ' juego deportivo '],
    ['Price','10.99']
 
    ];
var body4 =
    [
    ['Id', '666777888'],
    ['Nombre', 'Tetris'],
    ['Description', ' juego de video '],
    ['Price','7.35']
 
    ];
export function ListaProductos(){
    return (
      <body>
      <section  id="galeria" class="container">
        <div class="text-center pt-5">
            <h1>Lista de productos</h1>
            
        </div>
        <div class="row">
            <div  class="col-lg-4">
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png" alt='galeriaprueba'></img>
              <div class="content-table">
             <Table heading={heading} body={body} />
              </div>
            </div>
            <div  class="col-lg-4" >
              <img src="https://i.blogs.es/27b569/telefono/450_1000.jpeg" alt='galeria'></img>
             <div class="content-table">
             <Table heading={heading} body={body2} />
              </div>     
              
            </div>
            <div  class="col-lg-4">
              <img src="https://st3.depositphotos.com/3369547/12847/v/600/depositphotos_128479286-stock-illustration-balloon-soccer-isolated-icon.jpg" alt='galeria'></img>
              <div class="content-table">
             <Table heading={heading} body={body3} />
              </div>
            </div>
            <div  class="col-lg-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBRmhcMz34dpGVVodhP4jiv8OeqQCKCmhWA&usqp=CAU" alt='galeria'></img>
              <div class="content-table">
             <Table heading={heading} body={body4} />
              </div>
            </div>
          

        </div>
      </section>
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
