import React from 'react'
import Image from 'next/image';
import logo from '../image/logobuga.png'
import styles from '../styles/Home.module.css'


const Footer = () => {
  return (
    <>
      <footer className={styles.page_footer}>
          <h3>Visitamos ........ te Esperaremos</h3>
          <figure className={styles.page_footer_figure}> 
          <Image className={styles.page_footer_figure_imagen} src={logo} alt='logo'/> 
          </figure>
          <br></br>
          &copy; {new Date().getFullYear()} Copyright: Ensayo de mi ciudad 
      </footer>
    </>
  )
}

export default Footer