import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto from './a.jpg';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App row" >

      <h1>ADMINISTRADOR DE PACIENTES </h1>
      <h1>CREAR MI CITA </h1>
      <h1>ADMINISTRA TUS CITAS </h1>

      <Form className="Form">

        <Form.Group className="col-3" controlId="formBasicEmail">
          <p className="TituloLabel">Nombre Mascota</p>
          <Form.Control className="mb-3" type="email" placeholder="Enter email" />


          <p className="TituloLabel">Nombre Dueño</p>
          <Form.Control className="mb-3" type="email" placeholder="Enter email" />


          <p className="TituloLabel">Fecha</p>
          <Form.Control  type="date" name="fecha" className="Input mb-3" />



          <p className="TituloLabel">Hora</p>
          <Form.Control type="time" name="hora" className="Input mb-3" />

          <p className="TituloLabel">Sintomas</p>
          <Form.Control as="textarea" style={{ height: '100px' }} className="mb-3" type="text"  />

          
        <Button className="Boton" variant="primary" type="submit">
          AGREGAR CITA
        </Button> 

        </Form.Group>


      </Form>


      <Card className="col-3 " style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <div>


        <img src={foto} />
      </div>
    </div>


  );
}

export default App;
