import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//<div className='bg-gradient-to-r from-neutral-900 via-[#202639] to-neutral-900 rounded-3xl'></div>
//space-y-96

function App() {
  return (
    <div className=" bg-neutral-900">
      <Navbar/>
      <section id='home'></section>
      <Header/>
      <div className='bg-gradient-to-r from-neutral-900 via-[#202639] to-neutral-900 rounded-3xl border-4 border-neutral-900 border-dashed'>
        <section id='languages'></section>
        <Languages/>
        <section id='work'></section>
        <Work/>
        <section id='contact'></section>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
