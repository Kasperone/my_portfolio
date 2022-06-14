import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import SocialIcons from "../SocialIcons"
import "./index.scss"

const Layout = () => (
  <div className="App">
    <div className="page">
      <Outlet />
    </div>
    <Navbar />
    <SocialIcons />
  </div>
)

export default Layout
