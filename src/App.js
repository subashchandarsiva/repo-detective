import './App.css';
import Navbar from './components/Layouts/Navbar'
import Users from './components/Users/Users'
import React ,{Component}from 'react'
import axios from 'axios'
import { Search } from './components/Users/Search';
import { Alert } from './components/Layouts/Alert';

class App extends Component {
  state = {
    loading:false,
    users:[],
    alert:null
  }
  
  SearchUser =async (name)=>{
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({loading:false,users:res.data.items})
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
      <div className="App">
        <Navbar title=" Repo Detective"/>
          <div className="container">
            <Alert alert={this.state.alert}/>
            <Search SearchUser={this.SearchUser} clearUser={this.clearUser} showClearUser ={this.state.users.length>0 ? true : false} setAlert={this.setAlert}/>
            <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
