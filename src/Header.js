import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img
                src="https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2020/10/nuevo-logo-gmail-2.jpg"
                alt=""
            />
        </div>
        <div className='header_middle'>
            <SearchIcon/>
            <input placeholder='Search mails' type="text"/>
            <ArrowDropDownIcon/>
        </div>
        <div className='header_right'>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header