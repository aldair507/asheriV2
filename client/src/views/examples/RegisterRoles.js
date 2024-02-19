import React from 'react';
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



const RegisterRoles = () => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-center mt-2 mb-3">
                <h3>Crea un Rol</h3>
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
                    <Input
                      placeholder="Role"
                      type="text"
                      autoComplete="new-role"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Register
                </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3"></Row>
        </Col>
      </div>
    </>
  );
};

export default RegisterRoles;


