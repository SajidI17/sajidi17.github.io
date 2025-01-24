import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WebLinks from "./components/WebLinks";
//import Projects  from "./components/Projects";
//<div className='bg-gradient-to-r from-neutral-900 via-[#202639] to-neutral-900 rounded-3xl'></div>
//space-y-96

//line 30
//<section id='projects'></section>
//<Projects/>

function App() {
  return (
    <div className=" bg-neutral-900">
      <Navbar/>
      <WebLinks/>
      <section id='home'></section>
      <Header/>
      <div className='bg-gradient-to-r from-neutral-900 via-[#202639] to-neutral-900'>
        <section id='work'></section>
        <Work/>
        <section id='languages'></section>
        <Languages/>
        <section id='contact'></section>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
