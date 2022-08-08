import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto from './a.jpg';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

function App() {

  const [citas, setCitas] = useState([{
    mascota: "Nina",
    dueño: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  }])

  return (
    <div className="App  " >

      <h1 className='Titulo'>ADMINISTRADOR DE PACIENTES </h1>

      <Row className='Posicion'>


        <h1 className='Titulo col-4 '>CREAR MI CITA </h1>
        <h1 className='Titulo col-4 '>ADMINISTRA TUS CITAS </h1>
      </Row>

      <Row>
        <Formulario></Formulario>
        <Cita></Cita>
      </Row>


      <div>


        <img src={foto} />
      </div>
    </div>


  );
}

function GuardarCitasfunction() {

}

function Formulario({ setCitas }) {
  const [mascota, setMascota] = useState("")
  const [dueño, setDueño] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [sintomas, setSintomas] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setCitas(prev => [...prev, {
      mascota,
      dueño,
      fecha,
      hora,
      sintomas
    }])
    setMascota("")
    setDueño("")
    setFecha("")
    setHora("")
    setSintomas("")
  }
  return (
    <Form onSubmit={handleSubmit} className="Form col-3">

      <Form.Group className="" controlId="formBasicEmail">
        <p className="TituloLabel">Nombre Mascota</p>
        <Form.Control className="mb-3" type="text" placeholder="Enter email" />

        <p className="TituloLabel">Nombre Dueño</p>
        <Form.Control className="mb-3" type="text" placeholder="Enter email" />

        <p className="TituloLabel">Fecha</p>
        <Form.Control type="date" name="fecha" className="Input mb-3" />

        <p className="TituloLabel">Hora</p>
        <Form.Control type="time" name="hora" className="Input mb-3" />

        <p className="TituloLabel">Sintomas</p>
        <Form.Control as="textarea" style={{ height: '100px' }} className="mb-3" type="text" />


        <Button className="Boton" variant="primary" type="submit">
          AGREGAR CITA
        </Button>

      </Form.Group>


    </Form>

  )
}

function Cita(props) {
  return (
    <Card className="Tarjeta" style={{ width: '18rem' }}>
      <Card.Body>

        <Card.Text className='TextoCard'>Mascota: {props.mascota}</Card.Text>
        <Card.Text>Dueño: {props.dueño}</Card.Text>
        <Card.Text>Fecha:{props.fecha}</Card.Text>
        <Card.Text>Hora:{props.hora}</Card.Text>
        <Card.Text>Sintomas:{props.sintomas}</Card.Text>
        <button onClick={props.delete}> ELIMINAR CITA </button>
      </Card.Body>
    </Card>
  )

}

export default App;
