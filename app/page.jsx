
"use client"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { useState } from "react";
//import Input from "./components/input/Input";
//import estilo from "./components/input/input.module.css";
import Link from "next/link";



function page() {
  return (
    <div>
     <div className={estilo.body}>

      <Header></Header>
      
    {/* <Link href={"./contato"}>ir para contato</Link> */}
    <Footer></Footer>
<Link href={'/teste'}>Levar para página teste</Link> 
</div>
</div>
)}

