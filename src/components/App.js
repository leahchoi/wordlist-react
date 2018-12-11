import React, { Component } from 'react';
import '../style/App.css';
import Header from './Header';
import WordList from './WordList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducer';


class App extends Component {
  render() {
    const store = createStore(reducers)
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <WordList />
        </div>
      </Provider>
    );
  }
}

export default App;
