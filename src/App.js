import './App.css';
import Navbar from './components/Layouts/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Users from './components/Users/Users'
import React ,{Component, Fragment}from 'react'
import axios from 'axios'
import { Search } from './components/Users/Search';
import { Alert } from './components/Layouts/Alert';
import { About } from './components/Pages/About';
import { UserInfo } from './components/Users/UserInfo';

class App extends Component {
  state = {
    loading:false,
    users:[],
    repos:[],
    alert:null,
    userInfo:{}
  }
  
  SearchUser =async (name)=>{
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({loading:false,users:res.data.items})
  }

  GetUser = async username =>{
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({userInfo:res.data,loading:false})
  }
  getUserRepos = async username =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({repos:res.data,loading:false})
  }
  clearUser=()=>{
    this.setState({  loading:false,
      users:[]})
  }
  setAlert =(msg,type)=>{
    this.setState({alert:{msg,type}})

    setTimeout(()=>{
      this.setState({alert:null})
    },2000)
  }
  render(){
    return (
      <Router>
      <div className="App">
        <Navbar title=" Repo Detective"/>
          <div className="container">
            <Alert alert={this.state.alert}/>
            <Switch>
              <Route  path="/" exact render={props=>(
                <Fragment>
                   <Search SearchUser={this.SearchUser} clearUser={this.clearUser} showClearUser ={this.state.users.length>0 ? true : false} setAlert={this.setAlert}/>
                   <Users loading={this.state.loading} users={this.state.users} />
                </Fragment>
              )}/>
              <Route path="/about" exact component={About}/>
              <Route exact path="/user/:login" render={props=>(
                <UserInfo {...props} GetUser={this.GetUser} userInfo={this.state.userInfo} loading={this.state.loading} getUserRepos={this.getUserRepos} repos={this.state.repos} />
              )}/>
            </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
