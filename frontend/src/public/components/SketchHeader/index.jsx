import React from "react"

// styles
import './m-sketchHeader.css'
import './d-sketchHeader.css'

const SketchHeader = () => {
    return (
        <section className="sketchHeader">
            <nav classname="sketchHeader__nav">
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo.png`} type="image/png" loading="lazy" fetchpriority="low" />
                    <img 
                        classname="sketch-logo" 
                        src={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo.png`} 
                        width="966" 
                        height="880" 
                        loading="lazy"  
                        alt="sketchview-logo"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>

                <menu className="sketchHeader__nav__menu">
                    <picture className="sketchHeader__nav__menu__picture">
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/Home1.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketch-info-button" 
                            src={`${process.env.PUBLIC_URL}/assets/pictures/Home1.png`} 
                            width="4961" 
                            height="6373"  
                            loading="lazy"  
                            alt="Icone information"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                    <picture className="sketchHeader__nav__menu__picture">
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/Home2.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketch-info-button" 
                            src={`${process.env.PUBLIC_URL}/assets/pictures/Home2.png`} 
                            width="4961" 
                            height="6373"  
                            loading="lazy"  
                            alt="Icone information"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>

                    <picture className="sketchHeader__nav__menu__picture">
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/projet1.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketch-crea-button" 
                            src={`${process.env.PUBLIC_URL}/assets/pictures/projet1.png`} 
                            width="4961" 
                            height="6373" 
                            loading="lazy"  
                            alt="Pointe de stylo"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                    <picture className="sketchHeader__nav__menu__picture">
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/projet2.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketch-crea-button" 
                            src={`${process.env.PUBLIC_URL}/assets/pictures/projet2.png`} 
                            width="4961" 
                            height="6373" 
                            loading="lazy"  
                            alt="Pointe de stylo"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>

                    <picture className="sketchHeader__nav__menu__picture">
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/contact1.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketch-tchat-button" 
                            src={`${process.env.PUBLIC_URL}/assets/pictures/contact1.png`} 
                            width="4961" 
                            height="6373"  
                            loading="lazy"  
                            alt="Icon utilisateur"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                    <picture className="sketchHeader__nav__menu__picture">
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/contact2.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketch-tchat-button" 
                            src={`${process.env.PUBLIC_URL}/assets/pictures/contact2.png`} 
                            width="4961" 
                            height="6373"  
                            loading="lazy"  
                            alt="Icon utilisateur"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </menu>
            </nav>
        </section>
    )
}

export default SketchHeader