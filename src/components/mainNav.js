import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import FlatButton from 'material-ui/FlatButton';
import Headroom from 'react-headroom';
import MediaQuery from 'react-responsive';



class MainNav extends Component {
  
  
  render() {
    
    const someNav = (
      <div>
      <Flexbox
            flexDirection="row"
            element="nav" 
            height="80px"
            alignItems="center"
            justifyContent='space-between'
            style={{
              backgroundColor: "#111111",
              paddingLeft: 20,
              paddingRight: 20
            }}>
               <div>
                  <img src={"https://ucarecdn.com/da372e76-24c6-4f2f-8579-c03cc87eae01/bwlogoNav.png"} alt="Bluewaters logo"/>
               </div>
               <MediaQuery minDeviceWidth={700}>
                 <FlatButton
                    label="REGISTER YOUR INTEREST" 
                    hoverColor="#8AA62F"
                    labelStyle={{color: '#FFFFFF'}}
                    style={{
                      border: '2px solid #FFFFFF',
                      height: '45px',
                      paddingLeft: '12px',
                      paddingRight: '12px'
                    }} />
               </MediaQuery>
             
            </Flexbox>
      </div>
      );
    
    
    return (
      <MediaQuery minWidth={700}>
        {(matches) => {
          if (matches) {
            return <Headroom>{someNav}</Headroom>;
          } else {
            return <div>{someNav}</div>;
          }
        }}
      </MediaQuery>
    );
  }
}

export default MainNav;
