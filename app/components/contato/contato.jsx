import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Contato.module.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


 function Contato() {
    return (
        <div className={styles.Contato}>
        <Header></Header>

             <div className={styles.Contato}>
            
                <input className={styles.nome} href={'/'} placeholder="Nome"></input>
                <input className={styles.email} href={'/'} placeholder="Email"></input>

                <button className={styles.enviarMsg}>Enviar</button>
            </div>
        <Footer></Footer>
        
        </div>
       
    )

}
export default Contato;