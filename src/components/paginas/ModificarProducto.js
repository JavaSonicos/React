import React , {useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form'






export function ModificarProducto(){
  
  const {register, errors, handleSubmit} = useForm();
 
  const [show, setShow] = useState(false);
  const [show_2, setShow_2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose_2 = () => setShow_2(false);
  ///const handleShow = () => setShow(true);
  const [data, setData] = useState([{id: "1", name: "Dos", unidades:10,precio: "1515", descripcion:"daskjhdgasidbsadad<sd"},{id: "2",name:"Hola",unidades:8,precio: "181515", descripcion:"jajajajajajaja"}]);
  const [form_da, setForm_da] = useState({id: "1", name: "por defecti", unidades:0, precio: "88888", descripcion: "8888"});
  const [valor, setValor] = useState ("");
  const [form_da_new, setForm_da_new] = useState({id: "", name: "", unidades:0, precio: "", descripcion: ""});
  const onSubmit = (data) => {
    console.log(data)
}
  function das(){
    console.log(form_da)
  }
    
function new_data(){
  setShow(false);
  console.log(form_da)


}

  function datas(){
    console.log(valor)
    console.log(data)
    const result = data.find(({ id }) => id === "1");
    
    if(result != undefined){
      setForm_da(result)
      console.log("LLEGO")
    }else {
      const result = data.find(({ id }) => id === "1");
      setForm_da(result)
    }
    
    console.log(form_da)
    setShow(true)

    }
  


  return (
    <div className='container'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <br/>
      <Form.Label>Productos</Form.Label>
      <Form.Select size="lg" onChange={(e) =>{
                setValor({...valor,id: e.target.value})
            }}>
        <option value ="">Select</option>      
        <option value ="1">Producto 1</option>
        <option value ="2">Producto 2</option>
        <option value ="3">Producto 3</option>
        <option value ="4">Producto 4</option>
        <option value="5">Producto 5</option>
      </Form.Select>
      <br />
      <Button variant="primary" onClick={datas}>
            Launch demo modal
          </Button>
          <Button variant="primary" onClick={das}>
           prueba
          </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDITAR PRODUCTO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Producto</Form.Label>
              <Form.Control
                type="name"
                value = {form_da.name}
                onChange={(e) =>{
                  setForm_da({...form_da,name: e.target.value})
              }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Unidades Disponibles</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value = {form_da.unidades}
                onChange={(e) =>{
                  setForm_da({...form_da,unidades: e.target.value})
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="float"
                value = {form_da.precio}
                onChange={(e) =>{
                  setForm_da({...form_da,precio: e.target.value})
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control as="textarea" rows={3} 
              value ={form_da.descripcion}
              onChange={(e) =>{
                setForm_da({...form_da,descripcion: e.target.value})
              }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={new_data}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>    

  </div>
    
);
  } 