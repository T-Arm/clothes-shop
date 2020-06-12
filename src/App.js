import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.page'
import ShopPage from './pages/shop/shop.page'
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }else{
        this.setState({currentuser: userAuth})
      }
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
