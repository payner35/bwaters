import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';



class NiceButton extends Component {
  

  
  render() {
      
    const {title} = this.props;
    
    return (
         <FlatButton
                  label={title}
                  hoverColor="#8AA62F"
                  labelStyle={{color: '#111111'}}
                  style={{
                    border: '3px solid #111111',
                    height: '45px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    marginTop: '20px'
                  }} />
    );
  }
}

export default NiceButton;
