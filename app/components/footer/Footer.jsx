import React from "react";
import styles from "@/app/components/footer/"

function footer(){
    return(
        <footer className={styles.inicial}>

            <div className={styles.image}>
            <Image src={"/"} width={130} height={130}></Image>
         </div>
          <div className={styles.containerLinks}>
          <p className={styles.titulo}>NOSSAS PÁGINAS</p>
                <Link href={'/'} className={styles.links}>Insta</Link>
                <Link href={'/'} className={styles.links}>Git</Link>
          </div>
          <div className={styles.copyright}>
                <p className={styles.pcopyright}>©2023 copyright</p>
            </div>
        </footer>
    )
}
export default footer;