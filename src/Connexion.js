import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Connexion extends Component {

    render() {
        return (
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
              Email
              </Col>
              <Col sm={6}>
                <FormControl type="email" placeholder="Email" />
              </Col>
          </FormGroup>
    
          <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
              Password
              </Col>
          <Col sm={6}>
            <FormControl type="password" placeholder="Password" />
          </Col>
      </FormGroup>
    
      <FormGroup>
        <Col smOffset={2} sm={10}>
        <Link to="/home" className="btn btn-success">Connexion</Link>
        </Col>
      </FormGroup>
    </Form>
        );
      }
}

export default Connexion;
