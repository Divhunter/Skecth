import React from "react"

// styles
import './m-sketchBanner.css'
import './d-sketchBanner.css.css'

const SketchBanner = () => {
    return (
        <section className="sketchBanner">
            <picture className="sketchBanner__picture">
                <source srcSet={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo-full.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchBanner__picture__logo" 
                    src={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo-full.png`} 
                    width="4961" 
                    height="6373"  
                    loading="lazy"  
                    alt="sketchview logo"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <picture className="sketchBanner__picture">
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchBanner__picture__logo" 
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

export default SketchBanner