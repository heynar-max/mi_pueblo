import React from 'react'
import BasilicaComp from '../components/BasilicaComp'
import CamposComp from '../components/CamposComp'
import Footer from '../components/Footer'
import HomeComp from '../components/HomeComp'
import PiscinaComp from '../components/PiscinaComp'



const Home = () => {
    return (
        <>
            <HomeComp/>
            <BasilicaComp/>
            <CamposComp/>
            <PiscinaComp/>
            <Footer/>
        </>
    )
}

export default Home