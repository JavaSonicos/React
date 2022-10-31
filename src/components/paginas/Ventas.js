import { Component } from "react";


var heading = ['Id Producto', 'Nombre Producto','Descripcion Producto', 'Precio Unidad'];



var body =
    [
    ['0001', 'Producto 1', 'Unidades dependiendo Producto','10'] ];


export function Ventas() {

    return (
        <>
            <br></br>
            <h3>Ventas</h3>
            <div >
                <Table heading={heading} body={body} />
            </div>
        </>
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
  
  