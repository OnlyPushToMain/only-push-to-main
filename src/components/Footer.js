import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-black h-20 text-white">
      <nav>
        <Link to="about">About</Link>
      </nav>
    </div>
  )
}

export default Footer
