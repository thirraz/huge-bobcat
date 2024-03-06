import { SCBold } from "../styles/SCBold"
import { SCHeading } from "../styles/SCHeading"
import { SCHeroSection } from "../styles/SCHeroSection"
import { SCTextContainer } from "../styles/SCTextContainer"
import { SCP } from "../styles/SCP"
import Logo from "./Logo"
import { SCHeroLeftSide } from "../styles/SCHeroLeftSide"
import { SCCTA } from "../styles/SCCTA"
import { SCHeroRightSide } from "../styles/SCHeroRightSide"
import DesktopMoviePostersContainer from "./DesktopMoviePostersContainer"
import { useViewportWidth } from "../hooks/useViewportWidth"
import HugePoster from "./HugePoster"

export default function HeroSection() {
	const viewportWidth = useViewportWidth()

	console.log(viewportWidth)

	return (
		<SCHeroSection>
			<SCHeroLeftSide>
				<Logo absolute fill="#1f1f1f" widthAndHeight={[60, 60]} />

				<SCTextContainer>
					<SCHeading fontsize="clamp(2.2rem, 6vw, 5rem)">
						Watch more movies spending less
					</SCHeading>
					<SCP color="var(--color-paragraph-black)" marginTop="3rem">
						With Huge Bobcat, you have access to{" "}
						<SCBold>+1000 movies</SCBold>, saving more money in the long
						run, by <SCBold>U$D2.99 per month</SCBold> with 2 free weeks!
					</SCP>
					<SCCTA>
						Enjoy 2-free-week{" "}
						<Logo fill="var(--color-white)" widthAndHeight={[16, 16]} />
					</SCCTA>
				</SCTextContainer>
			</SCHeroLeftSide>

			<SCHeroRightSide>
				{viewportWidth > 1227 ? (
					<DesktopMoviePostersContainer />
				) : (
					<HugePoster bgImg={"url('/1.jpg')"} />
				)}
			</SCHeroRightSide>
		</SCHeroSection>
	)
}
