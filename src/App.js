import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Todos from "./containers/TodosContainer";
import "./App.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <MuiThemeProvider>
        <Todos />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;

