
"use client"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { useState } from "react";
//import Input from "./components/input/Input";
import estilo from "./page.module.css";
import Link from "next/link";



export default function page() {
  return (
    <div>
      <div className={estilo.body}>

        <Header></Header>

        {/* <Link href={"./contato"}>ir para contato</Link> */}
        <Footer></Footer>
        <Link href={'/teste'}>Levar para página teste</Link>
      </div>
    </div>
  )
}

