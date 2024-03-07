import DontWasteMoreTimeComponent from "./components/DontWasteMoreTimeComponent"
import HeroSection from "./components/HeroSection"
import Reasons from "./components/Reasons"
import Steps from "./components/Steps"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { SCApp } from "./styles/SCApp"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function App() {
	useEffect(() => {
		const lenis = new Lenis()

		lenis.on("scroll", e => {
			console.log(e)
		})

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	return (
		<SCApp>
			<HeroSection />
			<Steps />
			<Reasons />
			<Testimonials />
			<DontWasteMoreTimeComponent />
			<Footer />
		</SCApp>
	)
}
