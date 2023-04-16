import React from 'react'
import Image from 'next/image'
import Basilica from '../image/foto8.jpg'
import foto3 from '../image/foto3.jpg'
import Puntos from '../image/puntos.png'
import foto1 from '../image/foto1.jpg'
import foto5 from '../image/foto5.jpg'
import styles from '../styles/Home.module.css'

const BasilicaComp = () => {
    return (
        <>
            <main className={styles.page_main}>
            <section className={styles.page_section_main}>
                <div className={styles.page_main_container}>
                <figure className={styles.page_main_figure}>
                        <Image className={styles.page_image_main} src={Basilica} alt='logo'/>
                        <h2>Basilica </h2>
                </figure>
                    <article className={styles.page_article}>
                        
                    <h1>Basilica Señor de los milagros</h1>
                <figure >
                        <Image className={styles.page_image_main_puntos} src={Puntos} alt='logo'/>
                </figure>
                <p className={styles.page_image_main_parrafo}>La atracción principal en Buga es La Basílica de Nuestro Señor de los Milagros.
                    La esencia de Buga reside en su centro histórico, en el que se destacan construcciones que datan de los siglos XVII y XVIII. Tal es el caso del mayor atractivo de la ciudad: la Basílica Menor del Señor de los Milagros, que es la cuarta más antigua del país. <br/>
                        Además, la basílica es toda una joya arquitectónica en sí misma y desde su terraza te permitirá apreciar los techos de teja que cifran el estilo colonial del centro histórico de la ciudad. </p>

                        <article className={styles.page_main_articule}>
                            <figure >
                                    <Image className={styles.page_image_articule} src={foto1} alt='logo'/>
                                    <h3>Palacio Justicia </h3>
                                    <p className={styles.page_image_main_articule_parrafo}>7 de septiembre de 1848 durante el Congreso de la Nueva Granada que se creó la institución cuando se promulgó la Ley 1799   </p>
                            </figure>
                            <figure >
                                    <Image className={styles.page_image_articule} src={foto3} alt='logo'/>
                                    <h3>Estacion Ferrocarril</h3>
                                    <p className={styles.page_image_main_articule_parrafo}>espectacular conjunto arquitectonico, declarado Bien de Interes Cultural (BIC) de la Nación por el Ministerio de Cultura.   </p>
                            </figure>
                            <figure >
                                    <Image className={styles.page_image_articule} src={foto5} alt='logo'/>
                                    <h3>Buga Nocturna </h3>
                                    <p className={styles.page_image_main_articule_parrafo}> lindos paisajes y muchos sitios para visitar nocturnos, como bares, discotecas y restaurantes en toda el municipio, muy ocogedor  </p>
                            </figure>
                            
                        </article>
                    </article>
                </div>
            </section>
        </main>
        </>
    )
}

export default BasilicaComp