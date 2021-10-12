import React from 'react'
import "./TopBar.css"

const TopBar = () => {
  return (
    <>
      <div className="TopBar">
       <ul className="navigation">
         <li><a href="#HOME"> <i class="fas fa-minus"></i> Home </a></li>
         <li><a href="#ABOUT"> <i class="fas fa-minus"></i> About </a></li>
         <li><a href="#RESUME"> <i class="fas fa-minus"></i> Resume </a></li>
         <li><a href="#SKILLS"> <i class="fas fa-minus"></i> Skills </a></li>
         <li><a href="#PROJECTS"> <i class="fas fa-minus"></i> Projects </a></li>
        </ul>
        <div className="contact">
          <a className="GetInTouch" href="#"><i  class="far fa-envelope"></i></a>
        </div>
      </div>
    </>
  )
}

export default TopBar
