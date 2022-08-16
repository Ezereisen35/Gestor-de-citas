import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto from './a.jpg';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";

function App() {

  const [citas, setCitas] = useState([{
    mascota: "Nina",
    dueño: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  }])

  useEffect(() => {
    console.log(citas)
  })

  return (
    <div className="App" >

      <h1 className='Titulo'>ADMINISTRADOR DE PACIENTES </h1>

      <Row className='Posicion'>


        <h1 className='Titulo col-6 '>CREAR MI CITA </h1>
        <h1 className='Titulo col-4 '>ADMINISTRA TUS CITAS </h1>
      </Row>

      <Row>
        
        <Col><Formulario className="col-6"setCitas={setCitas}></Formulario></Col>
        <Col><ListaCita className="col-6 ml-4" citas={citas} setCitas={setCitas} /></Col>
        
      </Row>


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
    <Form onSubmit={handleSubmit} className="Form col-6">

      <Form.Group className="" controlId="formBasicEmail">
        <p className="TituloLabel">Nombre Mascota</p>
        <Form.Control className="mb-3" type="text" placeholder="Enter email" value={mascota} onChange={e => setMascota(e.target.value)} />

        <p className="TituloLabel">Nombre Dueño</p>
        <Form.Control className="mb-3" type="text" placeholder="Enter email" value={dueño} onChange={e => setDueño(e.target.value)} />

        <p className="TituloLabel">Fecha</p>
        <Form.Control type="date" name="fecha" className="Input mb-3" value={fecha} onChange={e => setFecha(e.target.value)}/>

        <p className="TituloLabel">Hora</p>
        <Form.Control type="time" name="hora" className="Input mb-3" value={hora} onChange={e => setHora(e.target.value)} />

        <p className="TituloLabel">Sintomas</p>
        <Form.Control as="textarea" style={{ height: '100px' }} className="mb-3" type="text" value={sintomas} onChange={e => setSintomas(e.target.value)}/>


        <Button className="Boton" variant="primary" type="submit">
          AGREGAR CITA
        </Button>

      </Form.Group>


    </Form>

  )
}

function ListaCita(props) {
  return (
    <>
      <div className="flex flex-col gap-4">{props.citas.map((cita, i) => <Cita
                {...cita}
                delete={() => {
                    console.log("hi")
                    const copy = [...props.citas]
                    copy.splice(i, 1)
                    console.log(copy)
                    props.setCitas(copy)
                }}
                key={i}
            />)}</div>
    </>
    
  )

}


function Cita (props) {
  console.log(props)
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
