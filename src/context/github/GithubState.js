import React,{useReducer} from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_REPOS,
    GET_USER,
    CLEAR_USERS
} from '../Types'

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV!== 'production'){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else{
  githubClientId=process.env.GITHUB_CLIENT_ID
  githubClientSecret=process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props =>{
    const initialState ={
        users:[],
        user:{},
        loading:false,
        repos:[]
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    
    
    //Search Users

    const SearchUser =async (name)=>{
        //this.setState({loading:true});
        setloading();
        const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        // this.setState({loading:false,users:res.data.items})
       // setusers(res.data.items);
       dispatch({type:SEARCH_USERS,payload:res.data.items})

      }

    //Get User
    const GetUser = async username =>{
        // this.setState({loading:true});
        setloading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        // this.setState({userInfo:res.data,loading:false})
        dispatch({type:GET_USER,payload:res.data})
      }
    //Get Repos

    const getUserRepos = async username =>{
      //this.setState({loading:true})
      setloading();
     // const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    const res =await axios({
      method: 'get', //you can set what request you want to be
      url:`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    }) 
     // this.setState({repos:res.data,loading:false})
     dispatch ({
       type:GET_REPOS,
       payload:res.data
     })
    }

    //Set Loading
      const setloading =()=> dispatch({type:SET_LOADING})

    //Clear Users
    const clearUser=()=>dispatch({type:CLEAR_USERS})

   return  <githubContext.Provider
   value={{
       users:state.users,
       user:state.user,
       repos:state.repos,
       loading:state.loading,
       SearchUser,
       clearUser,
       GetUser,
       getUserRepos
   }}
   >
        {props.children}

   </githubContext.Provider>
}

export default GithubState;