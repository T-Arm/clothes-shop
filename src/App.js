import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.page'
import ShopPage from './pages/shop/shop.page'
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';

import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          console.log(this.state)
        })
      }else{
        setCurrentUser(userAuth)
      }
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path= '/' component= {HomePage} />
            <Route path= '/shop' component= {ShopPage} />
            <Route path= '/signIn' component= {SignInSignUp} />
          </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
