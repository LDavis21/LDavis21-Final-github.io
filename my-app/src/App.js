import React, {Component} from 'react';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

class App extends Component{
  render(){
    return(
      <Router>
        <Header/>
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route render={() => <Redirect to="/"/>}/>
          </Switch>
          <Footer/>
      </Router>
    );
  }
}
export default App;
