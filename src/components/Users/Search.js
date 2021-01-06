import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class Search extends Component{
    state={
        text:''
    }

    static propTypes ={
        SearchUser:PropTypes.func.isRequired,
        clearUser:PropTypes.func.isRequired,
        showClearUser:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit =(e)=>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert("Please enter some github user name","light")
        }else{
            this.props.SearchUser(this.state.text);
            this.setState({text:''})
        }
    }
    render(){
        return(
        <div>
             <form onSubmit={this.onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User" value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
             </form>
             {this.props.showClearUser &&
             <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button>}
        </div>)
    }
}