import React from "react"

// styles
import './m-sketchCrea.css'
import './d-sketchCrea.css'

const SketchCrea = () => {
    return (
        <section className="sketchCrea">
            <div className="sketchCrea__container">
                <span className="sketchCrea__container__triangle triangle1Crea"></span>
                <span className="sketchCrea__container__triangle triangle2Crea"></span>
                <span className="sketchCrea__container__triangle triangle3Crea"></span>
            </div>
            <h1 className="sketch__title">C<span>R&Eacute;A</span></h1>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchCrea__picture sketch__title-plume" 
                    src={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} 
                    width="593" 
                    height="133"  
                    loading="lazy"  
                    alt="plume"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <p className="sketchCrea__text sketchCrea__text--center">
                <span className="sketchCrea__span1">Sketch</span> <span className="sketchCrea__span2">View</span> accompagne vos projet où que vous soyez.
                <br />
                Nous intervenons partout en <span className="sketchCrea__span13">France</span> et à l'<span className="sketchCrea__span13">international</span>.
                <br />
                <br />
                <span className="sketchCrea__span6">#</span> <span className="sketchCrea__span8">DISPONIBLE</span> <span className="sketchCrea__span7">à tous les coins de rues</span>
            </p>
            <div className="separator">
                <span className="separator_line separator_line1"></span>
                <span className="separator_line separator_line2"></span>
            </div>
            <header>
                <span className="title">Nos services</span>
                <span className="title-underline"></span>
            </header>
            <p className="sketchCrea__text sketchCrea__text--start">
                <span className="sketchCrea__span2">1 - </span><span className="sketchCrea__span11">Création de visuels 3D sur mesure</span>
                <li className="sketchCrea__text__listOne">
                    <i>
                        Modélisations réalistes pour vos projets techniques et architecturaux.
                        <br />
                        Représentations qui captivent vos clients et prtenaires.
                    </i>
                </li>
            </p>
            <div className="sketchCrea__containerImg img1" >
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/images.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketchCrea__containerImg--img" 
                        src={`${process.env.PUBLIC_URL}/assets/banners/images.jpg`} 
                        width="12000" 
                        height="2400"  
                        loading="lazy"  
                        alt="multiples images"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>
            </div>
            <p className="sketchCrea__text sketchCrea__text--start">
                <span className="sketchCrea__span1">2 - </span><span className="sketchCrea__span11">Plans d'installation de chantier</span>
                <li className="sketchCrea__text__listOne">
                    <i>
                        Plans clairs et détaillés pour une compréhension optimale.
                        <br />
                        Supports adaptés aux appels d'offres et à la planification des travaux.
                    </i>
                </li>
            </p>
            <div className="sketchCrea__containerImg img2" >
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/PIC.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketchCrea__containerImg--img" 
                        src={`${process.env.PUBLIC_URL}/assets/banners/PIC.jpg`} 
                        width="12000" 
                        height="2400"   
                        loading="lazy"  
                        alt="multiples images"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>
            </div>
            <p className="sketchCrea__text sketchCrea__text--start">
                <span className="sketchCrea__span2">3 - </span><span className="sketchCrea__span11">Vidéos immersives et explicatives</span>
                <li className="sketchCrea__text__listOne">
                    <i>
                        Animations 3D pour illustrer des processus ou des modes opératoires.
                        <br />
                        Présentations dynamiques et professionnelles pour mieux convaincre.
                    </i>
                </li>
            </p>
            <div className="sketchCrea__containerImg img3" >
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/Video.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketchCrea__containerImg--img" 
                        src={`${process.env.PUBLIC_URL}/assets/banners/Video.jpg`} 
                        width="12000" 
                        height="2400"   
                        loading="lazy"  
                        alt="dessin technique"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>
            </div>
            <p className="sketchCrea__text sketchCrea__text--start">
                <span className="sketchCrea__span1">4 - </span><span className="sketchCrea__span11">Dessins style "BD"</span>
                <li className="sketchCrea__text__listOne">
                    <i>
                        Créations originales sur tablette graphique pour apporter une touche unique.
                        <br />
                        Illustrations pédagogiques et ludiques adaptées à vos besoins.
                    </i>
                </li>
            </p>
            <div className="sketchCrea__containerImg img4" >
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/dessin.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketchCrea__containerImg--img" 
                        src={`${process.env.PUBLIC_URL}/assets/banners/dessin.jpg`} 
                        width="12000" 
                        height="2400"  
                        loading="lazy"  
                        alt="personnages dessinés"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>
            </div>
        </section>
    )
}

export default SketchCrea