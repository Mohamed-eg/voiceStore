import React ,{ useState } from 'react';
import { Link, NavLink } from "react-router-dom";


const Nav = (props) => {
  const [state,setState]=useState({active: true,newclass:['','','','']});
 const Open =(state)=>{
  console.log(state.active)
    // setState({active: true,active: !state.active});
    if(state.active){
      setState({active: false ,newclass: ['active1','active2','active3','activelist']})
    }else{
       setState({ active: true,newclass: ['','','','']})
    }
}
  return (
    <>
<nav>
  <div className="navdivs1" >
      <div 
      id='AllMenu'
      className={state.newclass[3]}>
      <h3>Menu</h3>
      <div className='Menu'>
          <Link to="#shop" onClick={()=>{props.handelCatagory('Fashon')}}><span><i className="fa-solid fa-face-grin-stars"></i></span>Fashion</Link>
         <Link to="#shop" onClick={()=>{props.handelCatagory('Adidas')}}> <span><i className="fa-solid fa-face-grin-stars"></i></span>Adidas</Link>
         <Link to="#shop" onClick={()=>{props.handelCatagory('Nike')}}> <span><i className="fa-solid fa-face-grin-stars"></i></span>Nike</Link>
         <Link to="#shop" onClick={()=>{props.handelCatagory('Poma')}}> <span><i className="fa-solid fa-face-grin-stars"></i></span>Poma</Link>
         <Link to="#shop" onClick={()=>{props.handelCatagory('Active')}}> <span><i className="fa-solid fa-face-grin-stars"></i></span>Active</Link>
      </div>
      </div>
    <div className='listDiv' onClick={()=>{Open(state)}}>
    <span className={state.newclass[0]}></span><span className={state.newclass[1]}></span><span className={state.newclass[2]}></span>
    </div>
  </div>
  {/* /////////////////////////////////////////////// */}
  <div>
      <h1>Voice</h1><span className='fire'><i className="fa-brands fa-hotjar"></i></span>
  </div>
   {/* ////////////////////////////////////////////// */}
  <div className="navdivs2">
      <NavLink to="../home">
      <p>Home</p>
          <span><i className="fa-solid fa-house-user"></i></span>
      </NavLink>
      <NavLink to="/componants/bagcon/about">
      <p>About</p>
      <span><i className="fa-regular fa-address-card"></i></span>
      </NavLink>
      <NavLink to="/componants/bagcon/contact">
      <p>Contact</p>
      <span><i className="fa-regular fa-paper-plane"></i></span>
      </NavLink>
      <NavLink to="/componants/bagcon/brodacts">
      <span><i className="fa-solid fa-cart-shopping"></i></span>
      <span className='count'>{props.cardNo}</span>
      </NavLink>
  </div>
</nav>
</>
  )
}

export default Nav

//----------------------






