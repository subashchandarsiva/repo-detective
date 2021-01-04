import './App.css';
import Navbar from './components/Layouts/Navbar'
import Users from './components/Users/Users'
import React ,{Component}from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    loading:false,
    users:[]
  }
  async componentDidMount(){
    this.setState({loading:true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({loading:false,users:res.data})

  }
  render(){
    return (
      <div className="App">
        <Navbar title=" Repo Detective"/>
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
        
      </div>
    );
  }
}

export default App;
