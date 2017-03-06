import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Radium from 'radium';


class Hero extends Component {
  
  render() {
      
    const {title} = this.props;
    
    return (
         <Flexbox 
              flexDirection="row"
              justifyContent='center'
              alignItems='center'
              height='45vw'
              style={{
                backgroundImage: 'url(https://ucarecdn.com/78158c92-821a-4645-b2af-c99e7fb0e545/bwbg3.jpg)',
                backgroundSize: 'cover',
                width: '100%'
              }}>
              

              <h1 style={{
                  color: 'white',
                  fontSize: '5vw'
              }}>{title}</h1>
              
          
          </Flexbox>
    );
  }
}

export default Radium(Hero);
