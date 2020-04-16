import React, {Component} from 'react';
import CardPhoto from "./components/CardPhoto";
import CardAboutTop from "./components/CardAboutTop";
import CardAboutBottom from "./components/CardAboutBottom";
import {store} from "./store";

class App extends Component {
  componentDiMount(){
    console.log('componentDiMount Ran');
  }
  componentDidCatch(){
    console.log('error');
  }
  render(){
    return(
      <div className="container">
        <CardPhoto/>
        <CardAboutTop
        aboutOne={store.getStore().aboutOne}
        aboutTwo={store.getStore().aboutTwo}
        />
        <CardAboutBottom
        name={store.getState().name}
        location={store.getState().location}
        />
      </div>
    );
  }
}
export default App;

