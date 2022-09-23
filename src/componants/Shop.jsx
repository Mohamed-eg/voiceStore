import ShopingCard from './shopingCard';
import './styles/shop.css';
import React from 'react'

const Shop = (props) => {
  // const [count,setCount]=useState(props.prodactsData)
  return (
  
    <div className='ShopContaner' >

        
        {
          props.prodactsData.map((p)=>{
            return <ShopingCard  key={p.id}  handelcount={props.handelcount} prodects={p}/>;
          })
        }

    </div>
  
  )
}

export default Shop

