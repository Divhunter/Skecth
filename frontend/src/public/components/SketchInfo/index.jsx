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
            <h1 className="sketchInfo__title">Info</h1>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo-full.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchInfo__picture sketchInfo-logo" 
                    src={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo-full.png`} 
                    width="4961" 
                    height="6373"  
                    loading="lazy"  
                    alt="sketchview logo"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchInfo__picture sketchInfo-plume" 
                    src={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} 
                    width="4961" 
                    height="6373"  
                    loading="lazy"  
                    alt="plume"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
        </section>
    )
}

export default SketchInfo