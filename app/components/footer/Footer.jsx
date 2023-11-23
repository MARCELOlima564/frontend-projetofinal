import React from "react";
import styles from "@/app/components/footer/"

function footer(){

        return(
            <div className={styles.footer}>
                <div>
                    <Link className={styles.links} href={'/'}>Home</Link>
                    <Link className={styles.links} href={'/'}>Sobre nós</Link>
                    <Link className={styles.links} href={'/'}>Contato</Link>
                </div>
                <div className={styles.copyright}>
                <Link className={styles.copyright} href={'/'}>©2023 copyright</Link>
                </div>
            </div>
        )
    } footer;

    export default footer;