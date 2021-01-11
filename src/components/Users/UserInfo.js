import React, { Component } from 'react';
import {Spinner} from '../Layouts/Spinner'
import {Link} from 'react-router-dom'
import { RepoItem } from '../Repos/RepoItems';

export class UserInfo extends Component{
    componentDidMount(){
        this.props.GetUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }
    render(){
      const {name,avatar_url,location,bio,blog,company,html_url,followers,following,public_gists,hireable,login,public_repos}= this.props.userInfo
        const {loading,repos} = this.props;
       
       if(loading) return <Spinner />
       
        return(<>
            <Link to ="/" className="btn btn-light">Back to Search</Link>
            Hireable: {" "}
            {
                hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger" />
            }
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{width:"150px"}} alt="DP" />
                    <h1>{name}</h1>
                    <p>Location:  {location}</p>
                </div>
                <div >
                    {bio && <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                    </>}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>{login && <>
                            <h3>Username :</h3><i> {login}</i>
                        </>}</li>
                        <li>{company && <>
                            <h3>Company :</h3> <i>{company}</i>
                        </>}</li>
                        <li>{blog && <>
                            <h3>Website :</h3> <i>{blog}</i>
                        </>}</li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers:{followers}</div>
                <div className="badge badge-success">Following:{following}</div>
                <div className="badge badge-light">Public Repos:{public_repos}</div>
                <div className="badge badge-dark">Public Gists:{public_gists}</div>
            </div>
            <RepoItem repos={repos} />
        </>)
    }
}