import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.page'
import ShopPage from './pages/shop/shop.page'
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(this.state.currentUser)
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
          <Switch>
            <Route exact path= '/' component= {HomePage} />
            <Route path= '/shop' component= {ShopPage} />
            <Route path= '/signIn' component= {SignInSignUp} />
          </Switch>
      </div>
    );
  }

}

export default App;
