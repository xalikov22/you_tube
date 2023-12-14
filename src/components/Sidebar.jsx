

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/css/Sidebar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFire } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        

   <div>
   <div className='icnn'>
        <NavLink active to='/'>
            <div className='top-icons'> 

          <AiOutlineHome className='iconPages' />
          <p className='texts'>Home</p>
            </div>
        </NavLink>
    </div>

    <div>
    <NavLink active to='/trending'>
        <div className='top-icons'>

          <BsFire className='iconPages' />
          <p className='texts'>Trending</p>
        </div>
        </NavLink>
        
        </div>  
        <div>
    <NavLink active to='/subscriptions'>
        <div className='top-icons'>

        <MdSubscriptions className='iconPages' />
          <p className='texts'>Subscriptions</p>
        </div>
        </NavLink>
        
        </div>    
     
         </div>  
       <div className='icn'>
       <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

          <GoFileDirectory className='iconPages' />
          <p className='texts'>Library</p>
        </div>
        </NavLink>
        
        </div>  
        <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

        <IoNewspaperOutline className='iconPages'/>
          <p className='texts'>History</p>
        </div>
        </NavLink>
        
        </div>        
         
        <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

           
          <LuAlarmClock className='iconPages'/>
          <p className='texts'>Watch later</p>
        </div>
        </NavLink>
        
        </div> 
        <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

           
        <FaRegStar className='iconPages' />

          <p className='texts'>Favourites</p>
        </div>
        </NavLink>
        
        </div>  
        <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

           
        <FaRegHeart className='iconPages' />


          <p className='texts'>Liked videos</p>
        </div>
        </NavLink>
        
        </div>  
        <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

           
        <LuMusic4 className='iconPages' />

          <p className='texts'>Music</p>
        </div>
        </NavLink>
        
        </div>  
        <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

           
        <IoGameControllerOutline className='iconPages' />

          <p className='texts'>Games</p>
        </div>
        </NavLink>
        
        </div>   
        <div>
    <NavLink active to='/trending'>
        <div className='bottom-icons'>

           
        <IoIosArrowDown className='iconPages' />

          <p className='texts'>Show more</p>
        </div>
        </NavLink>
        
        </div>   
           
         
       
       </div>


    </div>
  );
};

export default Sidebar;
