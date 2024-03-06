import { SCCTA } from "../styles/SCCTA"
import { SCDontWasteMoreTimeComponent } from "../styles/SCDontWasteMoreTimeComponent"
import { SCHeading } from "../styles/SCHeading"
import { SCP } from "../styles/SCP"
import Logo from "./Logo"

import moneyFlying from "../assets/money-wont-flying-around.png"
import { SCImg } from "../styles/SCImg"
import { SCDiv } from "../styles/SCDiv"

export default function DontWasteMoreTimeComponent() {
	return (
		<SCDontWasteMoreTimeComponent>
			<SCDiv>
				<SCHeading fontsize="clamp(1.8rem, 5vw, 4.7rem)">
					Don&apos;t waste more time!
				</SCHeading>
				<SCP color="var(--color-paragraph-black)">
					With us, your money won&apos;t flying around. Use Huge Bobcat and
					be happy with the best movies!
				</SCP>

				<SCCTA>
					Enjoy 2-free-week{" "}
					<Logo fill="var(--color-white)" widthAndHeight={[16, 16]} />
				</SCCTA>
			</SCDiv>
			<SCImg
				src={moneyFlying}
				alt="With Huge Bobcat, your money won't flying around (image)"
			/>
		</SCDontWasteMoreTimeComponent>
	)
}
