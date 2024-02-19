import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";




import Header from "components/Headers/Header.js";

const RegisterUser = () => {

  const [isLoading, setIsloading]= useState(false)
  const [userData, setUserData] = useState({
    identificacion: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    email:  '',
    contrasena: '',
  });

  const handleChange = (e) => {
    // Actualiza el estado de userData cuando cambia un campo del formulario
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setIsloading(true)
    try {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        mode: 'cors',
      });

      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        // Si la respuesta es JSON, analizarla como tal
        const data = await response.json();
        console.log('Respuesta del backend:', data);
      } else {
        // Si la respuesta no es JSON, tratarla como texto
        const text = await response.text();
        console.log('Respuesta del backend:', text);
      }

      if (!response.ok) {
        // Si la respuesta indica un error, mostrar la información del error
        const errorData = await response.json();
        console.error('Error del servidor:', errorData);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
    if(isLoading){
      <div>cargando</div>
    }

  };


  return (<>
  <Header />
  
    
    <div className="d-flex justify-content-center align-items-center vh-100">
      
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-center mt-2 mb-3">
              <h3>Crea un Usuario</h3>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-badge" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input  onChange={handleChange}
                  name='identificacion'
                    placeholder="Identification"
                    type="text"
                    autoComplete="new-identification"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={handleChange}
                    placeholder="First Name"
                    name='nombre'
                    type="text"
                    autoComplete="new-firstname"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Last Name"
                    onChange={handleChange}
                    name='apellidos'
                    type="text"
                    autoComplete="new-lastname"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-mobile-button" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={handleChange}
                    placeholder="Phone Number"
                    name='telefono'
                    type="tel"
                    autoComplete="new-phone"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={handleChange}
                    placeholder="Email"
                    name='email'
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={handleChange}
                    placeholder="Password"
                    name='contrasena'
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={handleRegister}>
                  Register
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          
        </Row>
      </Col>
    </div>
    </>
  );
};

export default RegisterUser;
