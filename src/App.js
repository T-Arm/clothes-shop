import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import HatsPage from './pages/hatspage/hatsPage.component'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= '/' component= {HomePage} />
          <Route path= '/hats' component= {HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
