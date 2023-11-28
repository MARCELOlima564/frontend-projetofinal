import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

function Contato() {
    return (
        <div className={styles.Contato}>

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

        </div>
    )
}
export default Contato;