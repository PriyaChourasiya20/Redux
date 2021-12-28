import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/Reducers/index';
import CounterComponent from './src/Component/CounterComponent';
import CounterAction from './src/Actions/CounterAction';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        {/* <CounterComponent /> */}
        <CounterAction />
      </Provider>
    );
  }
}

export default App;
