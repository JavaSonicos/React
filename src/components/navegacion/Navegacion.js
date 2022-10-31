import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , Outlet} from 'react-router-dom';


export function Navegacion(){
    return (

    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/Home">MisionTic</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link  as={Link} to ="/carrito"> Carrito </Nav.Link>
                <Nav.Link  as={Link} to ="/listaproductos">Lista Productos</Nav.Link>
                <Nav.Link  as={Link} to ="/modificarproducto">Modificar Producto</Nav.Link>
                <Nav.Link  as={Link} to ="/ventas">Ventas</Nav.Link>
            </Nav>     
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
  }
  
  