import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

function Nav() {
  return (
    <>
    <div id="container" className='flex justify-between gap-5'>
        <div id="icon-0">
        <a href=""><HomeOutlinedIcon/></a>
        </div>
        <div id="icon-1">
          <a href=""><WorkOutlineOutlinedIcon/></a>
        </div>
        <div id="icon-2">
          <a href=""><AccountCircleOutlinedIcon/></a>
        </div>
        <div id="icon-3">
          <a href=""><AlternateEmailOutlinedIcon/></a>
        </div>
    </div>
    </>
  )
}

export default Nav