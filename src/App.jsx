import DontWasteMoreTimeComponent from "./components/DontWasteMoreTimeComponent"
import HeroSection from "./components/HeroSection"
import Reasons from "./components/Reasons"
import Steps from "./components/Steps"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { SCApp } from "./styles/SCApp"

export default function App() {
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
