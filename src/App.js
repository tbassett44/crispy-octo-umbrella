import React, { Component } from 'react';
import './App.css';
import SeriesInput from './components/SeriesInput'
import SeriesInfo from './components/SeriesInfo'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore((state , action) => {
  switch(action.type){
    case "SET_SERIES_DATA":
      state.SeriesData=action.data;
    break;
    default:
    break;
  }
  if(!state){
    return {
      SeriesData:false
    };//empty initialization
  }else{
    return state;
  }
})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="app__input">
            <SeriesInput store={store} />
          </div>
          <div className="app__body">
            <SeriesInfo store={store}/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
