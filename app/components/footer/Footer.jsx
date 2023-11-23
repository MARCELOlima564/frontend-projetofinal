import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/footer/Footer.module.css"
function Footer(){

        return(
            <div className={styles.footer}>
                <div>
                    <Link className={styles.links} href={'/'}>Home</Link >
                    <Link className={styles.links} href={'/'}>Sobre nós</Link>
                    <Link className={styles.links} href={'/'}>Contato</Link>
                    <Link className={styles.links} href={'/'}>Cadastrar</Link>
                </div>
                <div className={styles.copyright}>
                <Link className={styles.linkcadastro} href={'/'}>©2023 copyright</Link>
                </div>
            </div>
        )
    } 

    export default Footer;