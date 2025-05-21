import React from "react"

// styles
import './m-sketchFooter.css'
import './d-sketchFooter.css'

const SketchFooter = () => {
    return (
        <section className="sketchFooter">
            <div className="sketchFooter__separator">
                <span className="sketchFooter__separator_line sketchFooter__separator_line1"></span>
                <span className="sketchFooter__separator_line sketchFooter__separator_line2"></span>
            </div>
            <p className="sketchFooter__slogan">Nous mettons notre expertise au service de votre succès.</p>
            <div className="sketchFooter__underline"></div>
        </section>
    )
}

export default SketchFooter