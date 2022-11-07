import React from 'react';
import loader from '../../assets/images/loader_icon.gif';

export default function Preloader() {
  return (
    <div style={{textAlign: 'center'}}>
        <img style={{width: '250px'}} src={loader} alt="loader" />
    </div>
  )
}
