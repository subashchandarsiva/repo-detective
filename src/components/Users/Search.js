import React, { useState,useContext} from 'react';
import githubContext from '../../context/github/githubContext'
import alertContext from "../../context/alerts/alertContext";

 const Search = (props)=>{
   const GithubContext = useContext(githubContext)
   const context = useContext(alertContext)
    const [text,setText] = useState('');

   const onChange=(e)=>{
        setText(e.target.value)
    }
   const onSubmit =(e)=>{
        e.preventDefault();
        if(text===''){
            context.setAlert("Please enter some github user name","light")
        }else{
            GithubContext.SearchUser(text);
           setText('')
        }
    }
        return(
        <div>
             <form onSubmit={onSubmit} className="form">
                <input type="text" aria-label="UserSearch" name="text" placeholder="Search User" value={text} onChange={onChange}/>
                <input type="submit" aria-label="searchbutton" value="Search" className="btn btn-dark btn-block"/>
             </form>
             {GithubContext.users.length>0 &&
             <button className="btn btn-light btn-block" onClick={GithubContext.clearUser}>Clear</button>}
        </div>)
    
}

export default Search;