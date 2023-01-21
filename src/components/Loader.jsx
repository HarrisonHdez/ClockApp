import React from 'react'
import loader from '../assets/loader.svg'
export const Loader = () => {
    return (
        <div className="loading">
             <img src={loader} alt="Logo" className="home-logo-loader "/>
        </div>
    );
}