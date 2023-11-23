import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/app/components/header/Header.module.css';

function Header(){
    return(
        <div className={styles.header}>
            <div>
                <Link className={styles.links} href={'/'}>Home</Link>
                <Link className={styles.links} href={'/'}>Sobre nós</Link>
                
                <Link className={styles.links} href={'/'}>Contato</Link>
            </div>
            <div className={styles.cadastro}>
            <Link className={styles.linkcadastro} href={'/'}>Cadastro</Link>
            </div>
        </div>
    )
}
export default Header;