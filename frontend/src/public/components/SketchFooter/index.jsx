import React from "react"

// styles
import './m-sketchFooter.css'
import './d-sketchFooter.css'

const SketchFooter = () => {
    return (
        <section className="sketchFooter">
            <div className="sketchFooter__sep sep-container">
                <div className="sketchFooter__sep1 sep1"></div>
                <div className="sketchFooter__sep2 sep2"></div>
            </div>
            <p className="sketchFooter__slogan">Nous mettons notre expertise au service de votre succès.</p>
            <div className="sketchFooter__underline"></div>
        </section>
    )
}

export default SketchFooter