import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Service'
import Protfolio from './components/protfolio/Protfolio'
import Testnomials from './components/testnomials/Testnomials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Describe from './components/Describe/Describe'



const App = () => {
  return (
    <>
    
    <Header/>
    <Describe/>
    <Nav/>
    <About/>
    <Experience/>

    <Protfolio/>
    
    <Contact/>
    <Footer/>


    
    </>
  )
}

export default App