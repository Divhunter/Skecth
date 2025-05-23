import React from "react"
import { useEffect } from 'react'

// styles
import './m-sketchTchat.css'
import './d-sketchTchat.css'

const SketchTchat = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="sketchTchat">
            <div className="sketchTchat__container">
                <span className="sketchTchat__container__triangle triangle1Tchat"></span>
                <span className="sketchTchat__container__triangle triangle2Tchat"></span>
                <span className="sketchTchat__container__triangle triangle3Tchat"></span>
            </div>
            <h1 className="sketch__title">T<span>CHAT</span></h1>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchTchat__picture sketch__title-plume" 
                    src={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} 
                    width="593" 
                    height="133"  
                    loading="lazy"  
                    alt="plume"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <p className="sketchTchat__text sketchTchat__text--center">
                <span className="sketchTchat__span1">Sketch</span> <span className="sketchTchat__span2">View</span> est à votre écoute pour répondre à vos besoins.
                <br />
                Notre mission est de rendre vos propositions <span className="sketchTchat__span4">claires</span>, <span className="sketchTchat__span3">attrayantes</span> et <span className="sketchTchat__span5">convaicantes</span>.
                <br />
                <br />
                <span className="sketchTchat__span6">#</span> <i><span className="sketchTchat__span2">Faites-nous</span> <span className="sketchTchat__span1">CONFIANCE</span></i>
            </p>
            <div className="separator">
                <span className="separator_line separator_line1"></span>
                <span className="separator_line separator_line2"></span>
            </div>
            <header>
                <span className="title">Votre satisfaction est notre priorité !</span>
                <span className="title-underline"></span>
            </header>
        </section>
    )
}

export default SketchTchat