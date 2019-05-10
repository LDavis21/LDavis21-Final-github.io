import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

class App extends Component{
  render(){
    return(
      <Router>
        <Header/>
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="products" component={}/>
            <Route render={() => <Redirect to="/"/>}/>
          </Switch>
          <Footer/>
      </Router>
    );
  }
}
export default App;
