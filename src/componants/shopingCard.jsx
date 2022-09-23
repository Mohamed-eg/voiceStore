import './styles/cart.css';
import React from 'react'

const ShopingCard = (props) => {
  return (
    <div className='CardContaner'>
    <div className='img'>
      <img src= {props.prodects.imgurl} alt=""/>
    </div>
    <div>
      <h2>{props.prodects.prand} Shoes</h2>
      <div className='SizeOfShoes'>
        <h3>Size :</h3>
        <span>41</span>
        <span>42</span>
        <span>43</span>
        <span>44</span>
        <span>45</span>
      </div>
      <button onClick={()=>{props.handelcount(props.prodects)}}>Add<i className="fa-solid fa-cart-plus"></i></button>
    </div>
  </div>
  )
}

export default ShopingCard
