import React from 'react'
import Image from 'next/image'
import Buga from '../image/bugag.jpg';
import foto3 from '../image/foto3.jpg'
import foto1 from '../image/foto1.jpg'
import foto5 from '../image/foto5.jpg'
import foto4 from '../image/foto4.jpg'
import styles from '../styles/Home.module.css'

const HomeComp = () => {
    return (
    <>
        <header className={styles.page_container_header}>
            
            <section className={styles.page_container_section}>
                <section className={styles.page_text_section}>
                    <h1>Los mejores 
                        <br/>lugares para visitar en<br/> Guadalajara de Buga</h1>
                    <section className={styles.page_text1_section}>
                    <p>Aquí hay algunas compensaciones que estoy seguro de que te enamorarás de lugares fantasticos, fauna y vegetacion y su gente amable y maravillosa que puedes visitar en cualquier temporada</p>
                </section>
                </section>
                
                <aside>
                <figure >
                        <Image className={styles.page_image_header} src={Buga} alt='logo' priority={true}/>
                </figure>
                
                </aside>
            </section>
        </header>
    </>
    ) 
}

export default HomeComp