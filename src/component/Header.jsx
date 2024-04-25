import React from 'react'
import Logo from '../Logo.png'
import { FiSearch} from "react-icons/fi";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav className='navBar'>
        <img  src={Logo} alt="" />
        <div>
          <Link to = "tvShows">TV Shows</Link>
          <Link to = "Movies">Movies</Link>
          <Link to = "RecentlyAdded">Recently Added</Link>
          <Link to = "MyList">My List</Link>
        </div>
        <FiSearch/>
    </nav>
  )
}

export default Header
