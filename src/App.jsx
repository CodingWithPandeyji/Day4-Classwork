import React from 'react'
import Quote from './Components/Quote'
import './App.css'
function App() {
  return (
    <>
    <div className='header'>
      <div className='left'>
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
         <span>GeekFoods</span>
      </div>
      <div className='center'>
        <a href="" className='active' >Home</a>
        <a href="">Quote</a>
        <a href="">Resturants</a>
        <a href="">Foods</a>
        <a href="">Contact</a>
      </div>
      <button>Get Started</button>
    </div>
   <Quote/>
 </>
  )
}

export default App