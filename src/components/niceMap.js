import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import NiceButton from '../components/niceButton';


class NiceMap extends Component {
  

  render() {
      
    const {title, buttonLabel, mapUrl} = this.props;
    
     return (
         <Grid style={{
                    paddingTop: '25px',
                    paddingBottom: '55px',
                    backgroundImage: 'url('+ mapUrl +')',
                    backgroundSize: 'cover',
                    width: '100%'
                    }}>
                    <Row style={{paddingLeft: '7.5vw', paddingRight: '7.5vw',}}>
                      <Col xs={12} sm={6} lg={6}>
                        <h2 style={{
                            fontSize: '2.5em',
                            color: 'black',
                            lineHeight: '1.2',
                            marginBottom: '100px'
                        }}>{title}</h2>
                        <NiceButton title={buttonLabel} />
                      </Col>
                      <Col xs={12} sm={6} lg={6}>
                        
                      </Col>
                    </Row>
            </Grid>
        )
  }
}

export default NiceMap;
