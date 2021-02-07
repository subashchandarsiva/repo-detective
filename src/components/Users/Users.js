import React,{useContext} from 'react'
import { Spinner } from '../Layouts/Spinner'
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext'

const Users =()=>{  
    
    const context = useContext(GithubContext)
    const {loading,users} = context
    if(loading){
        return <Spinner/>
    }else{
        return (
            <div style={UserStyle}>
                {users.map(user=>(
                     <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )  
    }
       
    
}


const UserStyle ={
      display:'grid',
      gridTemplateColumns:'repeat(3,1fr)',
      gridGap:'1rem'  
}
export default Users
