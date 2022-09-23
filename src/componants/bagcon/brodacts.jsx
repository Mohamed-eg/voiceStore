import React from 'react';
import ShopingCard from '../shopingCard';
import '../styles/brodacts.css'

const Brodacts = (props) => {
  return (


    
    <div className='allProdacts' >
      <header>
      <h1>Shoes</h1>
      <h1>Type</h1>
      <h1>Size</h1>
      <h1>Pris</h1>
      <span><i className="fa-solid fa-circle-minus"></i></span>
      </header>
     <>
     {
        props.prodectsAdded.map((p)=>{
      return (<div className='singlProdact'key={p.id}><ShopingCard  prodects={p}/> <h2>{p.prand}</h2> <h2>{p.size}</h2> <h2>{`${p.pris}L.E`}</h2> <span onClick={()=>{props.handelDelete(p.id)}} ><i className="fa-regular fa-trash-can"></i></span> </div>
         )
        })
      }

     </>
    <footer className='foot'>{`Tottal pris = ${props.Sum} L.E`}</footer>
    </div>
  )
}

export default Brodacts
