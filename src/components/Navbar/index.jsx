import React, { useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import "animate.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faUser,
  faEnvelope,
  faComputer,
} from "@fortawesome/free-solid-svg-icons"
import LogoK from "../../assets/images/k-logo-1.png"

const Navbar = () => {
  const menuBtnRef = useRef(null)
  useEffect(() => {
    const menuBtn = document.querySelector(".nav-bar_btn_wrapper")
    const navBar = document.querySelector(".nav-bar_slide")

    let menuOpen = false

    menuBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (!menuOpen) {
        menuBtn.classList.add("open")
        navBar.classList.add("nav-bar_open")

        menuOpen = true
      } else {
        menuBtn.classList.remove("open")
        navBar.classList.remove("nav-bar_open")
        menuOpen = false
      }
    })
  }, [])

  return (
    <header className="header">
      <Link className="header-top" to="/">
        <div className="header-top_logo-wrapper">
          <img src={LogoK} alt="logo" />
        </div>
        <div className="nav-bar_btn_wrapper">
          <div className="nav-bar_btn-burger" ref={menuBtnRef} />
        </div>
      </Link>
      <nav className="nav-bar_slide">
        <div className="icon-wrapper">
          <NavLink
            exact="true"
            activeclassname="active"
            className="home-link"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#fff" />
          </NavLink>
        </div>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faComputer} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
      </nav>
    </header>
  )
}

console.log("Sidebar End")

export default Navbar
