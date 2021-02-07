import './App.css';
import Navbar from './components/Layouts/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react'
import { Alert } from './components/Layouts/Alert';
import { About } from './components/Pages/About';
import GithubState from '../src/context/github/GithubState' //adding the context state
import AlertState from '../src/context/alerts/AlertState' //adding the context state
import  UserInfo  from './components/Users/UserInfo';
import { Home } from './components/Pages/Home';
import { NotFound } from './components/Pages/NotFound';

const  App =()=> {
    return (
      <GithubState>
        <AlertState >
      <Router>
      <div className="App">
        <Navbar title=" Repo Detective"/>
          <div className="container">
            <Alert />
            <Switch>
              <Route  path="/" exact  component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route exact path="/user/:login" 
                component={UserInfo} />
                <Route component ={NotFound} />
            </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

export default App;
