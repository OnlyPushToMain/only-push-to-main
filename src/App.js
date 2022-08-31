import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import AnimateLogo from "./components/AnimateLogo"

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-[100vh] w-[100vw] bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<AnimateLogo/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
