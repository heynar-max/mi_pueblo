import React from 'react'
import Image from 'next/image'
import foto4 from '../image/foto4.jpg'
import styles from '../styles/Home.module.css'

const CamposComp = () => {
    return (
        <>
        <main className={styles.page_container_main}>
            <section className={styles.page_container_main_section}>
                <section className={styles.page_text_main}>
                    <h1>Verdes Campos, vista maravillosa</h1>
                </section>
                <aside>
                <figure >
                        <Image className={styles.page_image_main_figure} src={foto4} alt='logo' priority={true}/>
                </figure>
                </aside>
            </section>
            <div className={styles.page_container_main_text}>
                <article className={styles.page_main_articule_title}>
                    <aside className={styles.page_aside}>
                            
                            <p>Derrumbado </p>
                            <p className={styles.page_main_articule_parrafo_text}>Si lo que quieres es disfrutar del deporte al aire libre este es el sitio adecuado sin lugar a dudas, para caminar, trotar o subir en bicicleta de montaña es un sitio excelente.</p>
                    </aside>
                    <aside className={styles.page_aside}>
                            
                            <p>Cascada del Milagroso</p>
                            <p className={styles.page_main_articule_parrafo_text}>Sin embrago más allá en las montañas hay lugares perfectos de la naturaleza. Vamos a conocer juntos la Cascada del Milagroso una caída de agua de más de 20 metros. </p>
                    </aside>
                    <aside className={styles.page_aside}>
                            
                            <p>Buga Nocturna </p>
                            <p className={styles.page_main_articule_parrafo_text}> Es el principal humedal en la planicie aluvial del río Cauca.<br/> En aves ,se registran aproximadamente 118 especies terrestres, 98 residentes y 20 migratorias  </p>
                    </aside>
                    
                </article>
            </div>
        </main>
        
        </>
    )
}

export default CamposComp