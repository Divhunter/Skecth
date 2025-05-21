import React from "react"
import { useState } from 'react'

// styles
import './m-sketchHeader.css'
import './d-sketchHeader.css'

const SketchHeader = () => {

    const isOpenZero = () => {
            setIsOpenOne(false)
            setIsOpenTwo(false)
            setIsOpenTree(false)
        }

    const [isOpenOne, setIsOpenOne] = useState(false)
        const isOpenStateOne = () => {
            setIsOpenOne(!isOpenOne)
            setIsOpenTwo(false)
            setIsOpenTree(false)
        }

    const [isOpenTwo, setIsOpenTwo] = useState(false)
        const isOpenStateTwo = () => {
            setIsOpenTwo(!isOpenTwo)
            setIsOpenOne(false)
            setIsOpenTree(false)
        }

    const [isOpenTree, setIsOpenTree] = useState(false)
        const isOpenStateTree = () => {
            setIsOpenTree(!isOpenTree)
            setIsOpenOne(false)
            setIsOpenTwo(false)
        }

    return (
        <section className="sketchHeader">
            <nav className="sketchHeader__nav">
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo.png`} type="image/png" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketch-logo" 
                        onClick={isOpenZero}
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
                    {isOpenOne ?
                        <picture>
                            <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/Home2.png`} type="image/png" loading="lazy" fetchpriority="low" />
                            <img 
                                className="sketchHeader__nav__menu__picture sketch-info-button" 
                                onClick={isOpenStateOne}
                                src={`${process.env.PUBLIC_URL}/assets/pictures/Home2.png`} 
                                width="4961" 
                                height="6373"  
                                loading="lazy"  
                                alt="Icone information"  
                                fetchpriority="low"
                                decoding="async"
                            />
                        </picture>
                        :
                        <picture>
                            <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/Home1.png`} type="image/png" loading="lazy" fetchpriority="low" />
                            <img 
                                className="sketchHeader__nav__menu__picture sketch-info-button" 
                                onClick={isOpenStateOne}
                                src={`${process.env.PUBLIC_URL}/assets/pictures/Home1.png`} 
                                width="4961" 
                                height="6373"  
                                loading="lazy"  
                                alt="Icone information"  
                                fetchpriority="low"
                                decoding="async"
                            />
                        </picture>
                    }

                    { isOpenTwo ?
                        <picture>
                            <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/projet2.png`} type="image/png" loading="lazy" fetchpriority="low" />
                            <img 
                                className="sketchHeader__nav__menu__picture sketch-crea-button"
                                onClick={isOpenStateTwo} 
                                src={`${process.env.PUBLIC_URL}/assets/pictures/projet2.png`} 
                                width="4961" 
                                height="6373" 
                                loading="lazy"  
                                alt="Pointe de stylo"  
                                fetchpriority="low"
                                decoding="async"
                            />
                        </picture>
                        :
                        <picture>
                            <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/projet1.png`} type="image/png" loading="lazy" fetchpriority="low" />
                            <img 
                                className="sketchHeader__nav__menu__picture sketch-crea-button" 
                                onClick={isOpenStateTwo}
                                src={`${process.env.PUBLIC_URL}/assets/pictures/projet1.png`} 
                                width="4961" 
                                height="6373" 
                                loading="lazy"  
                                alt="Pointe de stylo"  
                                fetchpriority="low"
                                decoding="async"
                            />
                        </picture>
                    }

                    { isOpenTree ?
                        <picture>
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/contact2.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketchHeader__nav__menu__picture sketch-tchat-button" 
                            onClick={isOpenStateTree}
                            src={`${process.env.PUBLIC_URL}/assets/pictures/contact2.png`} 
                            width="4961" 
                            height="6373"  
                            loading="lazy"  
                            alt="Icon utilisateur"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                    :
                    <picture>
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/contact1.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketchHeader__nav__menu__picture sketch-tchat-button" 
                            onClick={isOpenStateTree}
                            src={`${process.env.PUBLIC_URL}/assets/pictures/contact1.png`} 
                            width="4961" 
                            height="6373"  
                            loading="lazy"  
                            alt="Icon utilisateur"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                    }
                </menu>
            </nav>
        </section>
    )
}

export default SketchHeader