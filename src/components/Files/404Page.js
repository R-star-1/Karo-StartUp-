import React from 'react';
import ErrorImage from "../Images/PageNotFound.jpg";
const ErrorPage =() =>{
    return(
        <>
            <img src={ErrorImage} alt="pagenotfound..." className='ErrorPage'/>
        </>
    );
}
export default ErrorPage;