import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(){
    super();
    this.state = {
      movies:[]
    };
  }

  componentDidMount(id){
    fetch('http://www.omdbapi.com/?apikey=fbaa219a&i=tt0322259')
    .then(response => response.json()) 
    .then(response => {
      this.setState({
        movies: response
      })
    })
  }

  render() {
    return (
      <div>
        <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={this.state.movies.Poster} alt="242x200">
              <h3>{this.state.movies.Title}</h3>
              <p>{this.state.movies.Plot}</p>
              <Link to="/teaser" className="btn btn-primary">Teaser</Link>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={this.state.movies.Poster} alt="242x200">
              <h3>{this.state.movies.Title}</h3>
              <p>{this.state.movies.Plot}</p>
              <Link to="/teaser" className="btn btn-primary">Teaser</Link>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={this.state.movies.Poster} alt="242x200">
              <h3>{this.state.movies.Title}</h3>
              <p>{this.state.movies.Plot}</p>
              <Link to="/teaser" className="btn btn-primary">Teaser</Link>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={this.state.movies.Poster} alt="242x200">
              <h3>{this.state.movies.Title}</h3>
              <p>{this.state.movies.Plot}</p>
              <Link to="/teaser" className="btn btn-primary">Teaser</Link>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={this.state.movies.Poster} alt="242x200">
              <h3>{this.state.movies.Title}</h3>
              <p>{this.state.movies.Plot}</p>
              <Link to="/teaser" className="btn btn-primary">Teaser</Link>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={this.state.movies.Poster} alt="242x200">
              <h3>{this.state.movies.Title}</h3>
              <p>{this.state.movies.Plot}</p>
              <Link to="/teaser" className="btn btn-primary">Teaser</Link>
            </Thumbnail>
          </Col>
        </Row>
        </Grid> 
    </div>     
    );
  }
}

export default Home;
