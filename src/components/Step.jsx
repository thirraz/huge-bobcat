import { SCHeading } from "../styles/SCHeading"
import { SCP } from "../styles/SCP"
import { SCStep } from "../styles/SCStep"
import { SCIcon } from "../styles/SCIcon"

export default function Step({ icon, title, paragraph }) {
	return (
		<SCStep>
			<SCIcon width="3.5rem" src={icon} alt="Step icon" />
			<SCHeading as="h3" fontsize="clamp(2rem, 1.4vw, 3rem)">
				{title}
			</SCHeading>
			<SCP color="var(--color-paragraph-black)" marginTop="3rem">
				{paragraph}
			</SCP>
		</SCStep>
	)
}
