
"use client"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { useState } from "react";
import Input from "./components/input/Input";
import estilo from "./components/input/input.module.css";
import Link from "next/link";



function page() {
  return (
    <div>
      <Header></Header>
      
    {/* <Link href={"./contato"}>ir para contato</Link> */}
    <Footer></Footer>
    </div>
    )
}

export default page;