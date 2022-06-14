import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import "./index.scss"

console.log("Layout Start")

const Layout = () => (
  <div className="App">
    <div className="page">
      <Outlet />
    </div>
    <Navbar />
  </div>
)
console.log("Layout End")
export default Layout
