import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Connexion from './Connexion';
import Home from './Home';
import Teaser from './Teaser';

const Login = ({match}) => (
  <div>
    <Connexion/>
  </div>  
)

const Video = ({match}) => (
  <div>
    <Teaser/>
  </div>  
)

const Movies = ({match}) => (
  <div>
    <Home/>
  </div>  
)

class App extends Component {

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
            <Link to="/">Fb VOD</Link>
            </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/home">New Release</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/home">Top Picks</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/home">Preorder</Link>
            </NavItem>
            <NavItem eventKey={4}>
              <Link to="/home">Last Chance</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={Login} />
      <Route path="/home" component={Movies} />
      <Route path="/teaser" component={Video} />
      </div>
    );
  }
}

export default App;
