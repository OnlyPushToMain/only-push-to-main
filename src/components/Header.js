import React from "react"
import { Link } from "react-router-dom"
import OPTMW from "../assets/OPTM-W-NOTEXT.png"

const Header = () => {
  return (
    <>
      <div className="bg-black">
        <nav>
          <Link to="/" >
            <img className="object-contain h-20" src={OPTMW}/>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
