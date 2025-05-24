import React, { useState } from "react"

// styles
import './m-sketchHeader.css'
import './d-sketchHeader.css'

const SketchHeader = () => {
    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)

    const [showFlash1, setShowFlash1] = useState(false)
    const [showFlash2, setShowFlash2] = useState(false)
    const [showFlash3, setShowFlash3] = useState(false)

    const handleFlash = (setFlashState) => {
        setFlashState(true)
        setTimeout(() => setFlashState(false), 100)
    }

    return (
        <section className="sketchHeader">
            <nav className="sketchHeader__nav">
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo.png`} type="image/png" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketch-logo" 
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

                    {/* INFO BUTTON */}
                    <picture>
                        <source
                            srcSet={
                                showFlash1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/Home3.png`
                                    : isHovered1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/Home2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/Home1.png`
                            }
                            type="image/png"
                        />
                        <img
                            className={`sketchHeader__nav__menu__picture sketch-info-button ${showFlash1 ? 'flash' : ''}`}
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            onClick={() => handleFlash(setShowFlash1)}
                            src={
                                showFlash1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/Home3.png`
                                    : isHovered1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/Home2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/Home1.png`
                            }
                            width="4961"
                            height="6373"
                            loading="lazy"
                            alt="Icône information"
                            decoding="async"
                        />
                    </picture>

                    {/* PROJET BUTTON */}
                    <picture>
                        <source
                            srcSet={
                                showFlash2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/projet3.png`
                                    : isHovered2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/projet2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/projet1.png`
                            }
                            type="image/png"
                        />
                        <img
                            className={`sketchHeader__nav__menu__picture sketch-crea-button ${showFlash2 ? 'flash' : ''}`}
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                            onClick={() => handleFlash(setShowFlash2)}
                            src={
                                showFlash2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/projet3.png`
                                    : isHovered2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/projet2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/projet1.png`
                            }
                            width="4961"
                            height="6373"
                            loading="lazy"
                            alt="Pointe de stylo"
                            decoding="async"
                        />
                    </picture>

                    {/* CONTACT BUTTON */}
                    <picture>
                        <source
                            srcSet={
                                showFlash3
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/contact3.png`
                                    : isHovered3
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/contact2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/contact1.png`
                            }
                            type="image/png"
                        />
                        <img
                            className={`sketchHeader__nav__menu__picture sketch-tchat-button ${showFlash3 ? 'flash' : ''}`}
                            onMouseEnter={() => setIsHovered3(true)}
                            onMouseLeave={() => setIsHovered3(false)}
                            onClick={() => handleFlash(setShowFlash3)}
                            src={
                                showFlash3
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/contact3.png`
                                    : isHovered3
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/contact2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/contact1.png`
                            }
                            width="4961"
                            height="6373"
                            loading="lazy"
                            alt="Icône utilisateur"
                            decoding="async"
                        />
                    </picture>

                </menu>
            </nav>
        </section>
    )
}

export default SketchHeader
