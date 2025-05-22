import React from "react"

// styles
import './m-sketchInfo.css'
import './d-sketchInfo.css'

const SketchInfo = () => {
    return (
        <section className="sketchInfo">
            <div className="sketchInfo__container">
                <span className="sketchInfo__container__triangle triangle1Info"></span>
                <span className="sketchInfo__container__triangle triangle2Info"></span>
                <span className="sketchInfo__container__triangle triangle3Info"></span>
            </div>
            <h1 className="sketch__title">I<span>NFO</span></h1>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchInfo__picture sketch__title-plume" 
                    src={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} 
                    width="4961" 
                    height="6373"  
                    loading="lazy"  
                    alt="plume"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <p className="sketchInfo__text">
                <span className="sketchInfo__span1">Sketch</span> <span className="sketchInfo__span2">View</span> est spécialisé dans la <span className="sketchInfo__span3">création</span> de contenus <span className="sketchInfo__span4">innovants</span>.
                <br />
                Nous <span className="sketchInfo__span4">VALORISONS</span> vos dossiers de réponse aux appels d'offres grâce à des <span className="sketchInfo__span5">visuels percutants</span>.
                <br />
                <br />
                <span className="sketchInfo__span6">#</span> <span className="sketchInfo__span7">Donnons</span> <span className="sketchInfo__span8">VIE</span> <span className="sketchInfo__span7">à vos projets</span>
            </p>
            <div className="separator">
                <span className="separator_line separator_line1"></span>
                <span className="separator_line separator_line2"></span>
            </div>
        </section>
    )
}

export default SketchInfo