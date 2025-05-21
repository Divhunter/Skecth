import React from "react"
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SketchHeader from '../../public/components/SketchHeader'
import SketchBanner from '../../public/components/SketchBanner'
import SketchFooter from '../../public/components/SketchFooter'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const PublicContainer = () => {

	window.onload = () => {
		// localStorage.removeItem('token')
		window.scrollTo(0, 0)
	}

	const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || .5,
                duration: duration || 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInTop('#titleAbout')
    }, [])

    useEffect(() => {
        slideInTop('#titleEpargne')
    }, [])

    useEffect(() => {
        slideInTop('#titlePrevoyance')
    }, [])

	useEffect(() => {
        slideInTop('#titleSante')
    }, [])

	useEffect(() => {
        slideInTop('#titlePro')
    }, [])

	useEffect(() => {
        slideInTop('#titlePret')
    }, [])

    useEffect(() => {
        slideInTop('#titleAuto')
    }, [])

    useEffect(() => {
        slideInTop('#titleAgences')
    }, [])

    useEffect(() => {
        slideInTop('#titleContact')
    }, [])

	return (
		<>
			<main>
				<SketchHeader />
				<SketchBanner />
                <SketchFooter />
			</main>
		</>
	) 
}
 
export default PublicContainer