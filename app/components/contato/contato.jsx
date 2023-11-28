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

            <div className={styles.img}>
                <Image src={"/logoArteAlémdaTela.jpeg"} width={150} height={150} className={styles.imagem}/>
            </div>

            <div>
                <Link className={styles.links} href={'/'}>Home</Link>
                <Link className={styles.links} href={'/'}>Sobre nós</Link>

                <Link className={styles.links} href={'/'}>Contato</Link>
            </div>

            <div className={styles.cadastro}>
            
                <input className={styles.nome} href={'/'} placeholder="Nome"></input>
                <input className={styles.email} href={'/'} placeholder="Email"></input>

                <button className={styles.enviarMsg}>Enviar</button>
            </div>
<Footer></Footer>
        </div>
       
    )

}
export default Contato;