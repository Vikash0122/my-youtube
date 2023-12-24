import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen= useSelector((store) => store.app.isMenuOpen); //subscribe

  if(!isMenuOpen) return null; // early return pattern
  return (
    <div>SideBar</div>
  )
}

export default SideBar