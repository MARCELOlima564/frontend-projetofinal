import React from 'react'
import Link from 'next/link'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


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