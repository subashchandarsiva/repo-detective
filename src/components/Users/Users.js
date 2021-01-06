import React from 'react'
import { Spinner } from '../Layouts/Spinner'
import UserItem from './UserItem';
import PropTypes from 'prop-types'

const Users =({loading,users})=>{    
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

Users.propTypes={
loading:PropTypes.bool.isRequired,
users:PropTypes.array.isRequired
}

const UserStyle ={
      display:'grid',
      gridTemplateColumns:'repeat(3,1fr)',
      gridGap:'1rem'  
}
export default Users
