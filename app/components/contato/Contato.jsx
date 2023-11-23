import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/app/components/Contato/contato.module.css';

function Contato(){
    return(
        <div className={styles.Contato}>
            <div>
                <Link className={styles.links} href={'/'}>Home</Link>
                <Link className={styles.links} href={'/'}>Sobre nós</Link>
                <input type="text" className=""> </input>
                
                <Link className={styles.links} href={'/'}>Contato</Link>
            </div>
            <div className={styles.cadastro}>
            <Link className={styles.linkcadastro} href={'/'}>Cadastro</Link>
            </div>
        </div>
    )
}
export default Cadastro;