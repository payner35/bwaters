import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Helmet from 'react-helmet';
import { reduxForm, Field } from 'redux-form'
import MainBlock from '../components/mainBlock';
import NiceButton from '../components/niceButton';
import Email from '../util/mailgun';


import {
  TextField
} from 'redux-form-material-ui'



class Register extends Component {

    _sendMail() {
       console.log("sdfsfsd");
    };    
        
      render() {
        return (
          <Flexbox flexDirection="column">
              <Helmet 
                title="BLUEWATERS I Apartments, Penthouses & Townhouses, Dubai, UAE"
                meta={[
                          {name: "description", content: "Located off coast of JBR opposite THE BEACH, Bluewaters from Meraas offers residents & visitors an unparalleled waterfront living experience. Learn more."},
                          {property: "og:type", content: "article"}
                      ]}/>
              
    
              
              
              <MainBlock title="Register">
              
                    <h2>Register your interest. Bluewaters Residences</h2>
              
                    <p>With an exclusive selection of premium apartments, penthouses, and townhouses available for the very first time, Bluewaters is a modern, family-oriented island destination with a pioneering spirit that blends waterfront living with the exhilaration of urban city life.</p>
    
                    <p>Exclusive Sales Agent</p>
                    
                    
                    <form>
                        <div>
                         <Field name="userName" floatingLabelText="Name"  fullWidth={true}  component={TextField}/>
                        </div>
                        <div>
                         <Field name="userPhone" floatingLabelText="Phone"  fullWidth={true}  component={TextField}/>
                        </div>
                         <div>
                          <Field name="userEmail" floatingLabelText="Email"  fullWidth={true}  component={TextField}/>
                        </div>
                         <div>
                          <Field name="userMessage" floatingLabelText="Message" fullWidth={true} multiLine={true}  component={TextField}/>
                        </div>
                    </form>
                    
                    
                    
                
                    <NiceButton title="REGISTER INTEREST"  />
                    
              </MainBlock>
              
              
              
            
            
            
              <Flexbox element="footer" height="60px">
                Footer
              </Flexbox>
    
          </Flexbox>
        );
  }
}


// Decorate with redux-form
Register = reduxForm({
  form: 'myForm'
})(Register)

export default Register;
