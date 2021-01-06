import React,{Fragment} from 'react';
import Spin from './spinner.gif'

export const Spinner = () => {
    return (
        <>
            <img src={Spin} alt="Loading.." style={{width:'200px',margin:'auto',display:'block'}}/>
        </>
    )
}
