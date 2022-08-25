import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import OPTMW from "./assets/OPTM-W-NOTEXT.png"
import AnimateLogo from "./components/AnimateLogo"

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-black italic">
        <AnimateLogo />
        <img className="w-1/3 "src={OPTMW}/>
      </div>
      <Footer />
    </>
  )
}

export default App
