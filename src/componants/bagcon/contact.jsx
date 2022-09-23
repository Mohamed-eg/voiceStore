import React from 'react';
import happy from '../../img/happy.jpg';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contactPage'>
      <h1>We are happy to contact with you </h1>
      <img src={happy} alt='happy'/>
      <div>
        <span><Link to='https://www.facebook.com/mohamed.elshayb.184' target="_blank"><i className="fa-brands fa-facebook"></i></Link></span>
        <span><Link to='mailto:mhmdalshayb39@gmail.com'><i className="fa-solid fa-at"></i></Link></span>
        <span><Link to='https://github.com/Mohamed-eg' target="_blank"><i className="fa-brands fa-github"></i></Link></span>
        <span><Link to='https://www.linkedin.com/in/mohamed-elshayb-552a50210/' target="_blank"><i className="fa-brands fa-linkedin"></i></Link></span>
        <span><Link to='https://discord.com/channels/@me' target="_blank"><i className="fa-brands fa-discord"></i></Link></span>

      </div>
    </div>
  )
}

export default Contact

