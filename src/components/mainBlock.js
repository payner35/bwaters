import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bem-grid';


class MainBlock extends Component {
  
  render() {
      
    const {title} = this.props;
    
    return (
        <Grid style={{
                paddingTop: '55px',
                paddingBottom: '55px',
                width: '85vw'
            }}>
            <Row>
              <Col xs={12} sm={4} lg={4}>
                <h2 style={{
                          marginTop: '12px',
                          marginBottom: '12px',
                          fontSize: '2.5em',
                          lineHeight: '1.2',
                       }}>{title}</h2>
              </Col>
              <Col xs={12} sm={8} lg={8}>
                <div>
                     {this.props.children}
                </div>
              </Col>
            </Row>
      </Grid>
    );
  }
}

export default MainBlock;
