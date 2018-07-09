import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = ({ type, color}) => (
    <div className="loadingComponent">
        <ReactLoading  type={type} color={color} height={50} width={50}/>
    </div>
)

export default Loading;