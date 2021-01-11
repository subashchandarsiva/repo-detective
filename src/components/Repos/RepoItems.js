import React from 'react'
import {Repo} from './Repo'
import PropTypes from 'prop-types'


export const RepoItem =({repos})=>{
    return repos.map(repo=>(
        <Repo repo={repo} key={repo.id}/>
    ))
}


RepoItem.propTypes={
    repos:PropTypes.array.isRequired,
}