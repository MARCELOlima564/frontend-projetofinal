import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Header from '../components/header/Header';
import styles from '../css/page.module.css'


function Hometest() {
  return (
    <div>
      <Header></Header>
      <Link href={"/"}>voltar para home</Link>
      <h1>Arte além da tela</h1>

      <div className='main'>

        <div className={styles.quadros}>

          <div className={styles.infosMini}>
            <div className={styles.img}    ><Image src={"./imgQadro1"}></Image></div>
            <h3>Nome da obra:</h3>
            <h3>nome do artista:</h3>
            <h3>clique aqui para saber mais...</h3>
          </div>

        </div>

        <div className={styles.quadros}>

          <div className={styles.infosMini}>
            <h3>Nome da obra:</h3>
            <h3>nome do artista:</h3>
            <h3>clique aqui para saber mais...</h3>
          </div>
          
        </div>

        <div className={styles.quadros}>

          <div className={styles.infosMini}>
            <h3>Nome da obra:</h3>
            <h3>nome do artista:</h3>
            <h3>clique aqui para saber mais...</h3>
          </div>
          
        </div>

        <div className={styles.quadros}>

          <div className={styles.infosMini}>
            <h3>Nome da obra:</h3>
            <h3>nome do artista:</h3>
            <h3>clique aqui para saber mais...</h3>
          </div>
          
        </div>

        <div className={styles.quadros}>

          <div className={styles.infosMini}>
            <h3>Nome da obra:</h3>
            <h3>nome do artista:</h3>
            <h3>clique aqui para saber mais...</h3>
          </div>
          
        </div>

        <div className={styles.quadros}>

          <div className={styles.infosMini}>
            
            <h3>Nome da obra:</h3>
            <h3>nome do artista:</h3>
            <h3>clique aqui para saber mais...</h3>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Hometest;