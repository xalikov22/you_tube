import React from 'react'
import { TiThMenu } from "react-icons/ti";
import Youtube from '../assets/img/Black.svg'
import { IoMdSearch } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import man from '../assets/Userpic.svg';

function Header() {
  return (
    
        
<header>

<div className="container">
<nav className='navbar'>

<div className='gamburgerbtn'>
<TiThMenu className='menubtn'/>

<img className='youtb' src={Youtube} alt="svg " />
</div>


<div className='Loop'>
    <input className='input' type="text" placeholder='Search' />
    <IoMdSearch  className='search__input'/>

</div>
<div className='icons'>
<IoVideocamOutline className='titul'/>

<CgMenuGridO className='titul' />
<FaRegBell className='titul'/>
<img  className='titul' src={man} alt="people" />
</div>
</nav>




</div>



</header>



  
  )
}

export default Header