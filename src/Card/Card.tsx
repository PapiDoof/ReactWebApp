import React, { useState } from 'react';
import './index.css'
import PhoneIcon from '../PageIcons/PhoneIcon.tsx'
import MailIcon from '../PageIcons/MailIcon.tsx'
import WebIcon from '../PageIcons/WebIcon.tsx'

function Card({data}:any) {
const [alt, setAlt] = useState(false);

const altClick = () => {
  setAlt(!alt);
};

  if (alt){
    return (
        
          
          
      <div className="card-container-alt">
        <p className="name-alt">{data.name} - "{data.username}"</p>
        <div>
          <p className='info'><MailIcon/> {data.email} </p>  <p className='info'><PhoneIcon/> {data.phone} </p> 
          <p className='info'><WebIcon/> <a href = "{data.website}">{data.website}</a></p></div>
          <button className='contact-button-alt' onClick={altClick}>
            Job info
          </button>
        </div>
    );
  } else {
    return (   
      <div className="card-container">
      <p className="name">{data.name} - "{data.username}"</p>
      <p className="job">{data.company.bs.charAt(0).toUpperCase()+ data.company.bs.slice(1)} 
        at {data.company.name}</p>
      <p className="address">{data.address.city}, {data.address.street}, {data.address.suite}, {data.address.zipcode}</p>
        <button className='contact-button' onClick={altClick}>
      Contact Info
    </button>
      <p className='quote'>"{data.company.catchPhrase}"</p>
    </div>
    );
  }

}
  export default Card;




