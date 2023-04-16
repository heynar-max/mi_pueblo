import React from 'react'
import Image from 'next/image'
import Puntos from '../image/puntos.png';
import foto7 from '../image/foto7.jpg'
import foto10 from '../image/foto10.jpg'
import foto2 from '../image/foto2.jpg'
import styles from '../styles/Home.module.css'

const PiscinaComp = () => {
    return (
    <>
        <main className={styles.page_main_piscina}>
            <section className={styles.page_section_main_piscina}>
                <div className={styles.page_main_container_piscina}>
                <figure >
                        <Image className={styles.page_image_main_piscina} src={foto7} alt='logo'/>
                        <h2>Casa Lago </h2>
                        <p className={styles.page_image_main_articule_parrafo_piscina}>Balneario Casa Lago El Manantial. Espectacular Destino Turístico en Buga, con Piscinas de Agua Natural, Cabañas Ecológicas y Servicio de Restaurante.   </p>
                </figure>
                    <article className={styles.page_article_piscina}>
                        
                    <h1>...Y muchos sitios mas </h1>
                <figure >
                        <Image className={styles.page_image_main_punto_piscina} src={Puntos} alt='logo'/>
                </figure>

                        <article className={styles.page_main_articule_piscina}>
                            <figure >
                                    <Image className={styles.page_image_articule_piscina} src={foto2} alt='logo'/>
                                    <h3>Club guadalajara </h3>
                                    <p className={styles.page_image_main_articule_parrafo_piscina}>Un bello hotel 5 estrellas, con todos lo servicios y muy acogedor   </p>
                            </figure>
                            <figure >
                                    <Image className={styles.page_image_articule_piscina} src={foto10} alt='logo'/>
                                    <h3>Plaza Revolucion</h3>
                                    <p className={styles.page_image_main_articule_parrafo_piscina}>para disfrutar en familia, descansas y relajarse en la plaza publica   </p>
                            </figure>
                            
                            
                        </article>
                    </article>
                </div>
            </section>
        </main>
    </>
    ) 
}

export default PiscinaComp