import React, { Component } from 'react';
import { Player, ReplayControl, ControlBar, ForwardControl } from 'video-react';
import { ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';

class Teaser extends Component {

  render() {
    return (
      <div>
        <Player src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4">
          <ControlBar>
            <ReplayControl seconds={30} order={2.3} />
            <ForwardControl seconds={30} order={3.3} />
          </ControlBar>  
        </Player>
        <Grid>
        <Row>
          <Col xs={6} md={4}>
          <ControlLabel>Langue</ControlLabel>
          <FormControl componentClass="select" placeholder="Langue">
                <option value="francais">Francais</option>
                <option value="anglais">Anglais</option>
                <option value="espagnol">Espagnol</option>
                <option value="italien">Italien</option>
          </FormControl>
          </Col>
          <Col xs={6} md={4}>
          <ControlLabel>Sous titre</ControlLabel>
          <FormControl componentClass="select" placeholder="Langue">
                <option value="francais">Francais</option>
                <option value="anglais">Anglais</option>
                <option value="espagnol">Espagnol</option>
                <option value="italien">Italien</option>
          </FormControl>
          </Col>
        </Row>
        </Grid> 
      </div>
    );
  }
}

export default Teaser;
