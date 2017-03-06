import React from 'react'
//firebase import ReactDOM from 'react-dom'
import { render } from 'react-snapshot'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import * as firebase from 'firebase'
import Home from './pages/home'
import Register from './pages/register'

import './index.css'
import './react-bem-grid.css'


//redux bitch
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { reducer as formReducer } from 'redux-form';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); 

//import reducers and set up redux..
import someReducers from './reducers';
const store = createStore(
  combineReducers({
    ...someReducers,
    form: formReducer // from redux form
  }),
  {}, // initial state
  compose(
      applyMiddleware(
        ReduxThunk,
        createLogger(),
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


//firebase

const config = {  
    apiKey: "AIzaSyCoZ7CpzduzE-HtAaS8G3niXK2m33a-g5A",
    authDomain: "bluewaters-da10f.firebaseapp.com",
    databaseURL: "https://bluewaters-da10f.firebaseio.com",
    storageBucket: "bluewaters-da10f.appspot.com",
    messagingSenderId: "721833516891"
};

//set up Firebase
firebase  
  .initializeApp(config)
  .database()
  .ref();




const MUIApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme({isRtl:false})}>
     <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/register" component={Register}/>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

render(
  <MUIApp />,
  document.getElementById('root')
);


