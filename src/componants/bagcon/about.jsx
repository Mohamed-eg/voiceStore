import React from 'react'
import'../styles/about.css'
function About() {
  const handelSubmit =(e)=>{
    e.preventDefault();
    console.log('submit');
  }
  return (
    <div className='countactContaner'>
      <form action="" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">Email</label>
        <input type="email" className="form-control" id="Email" aria-required  placeholder="Example input placeholder"/>
      </div>

      <div className="mb-3">
        <label htmlFor="Aria" className="form-label">Write your massage</label>
        <input type="text-area" className="form-control" id="Aria" placeholder="Another input placeholder"/>
      </div>
      <button type="submit" className='btn-sm btn btn-primary' >Submit</button>
      </form>
    </div>
  )
}

export default About


