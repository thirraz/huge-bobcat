import { SCHeading } from "../styles/SCHeading"
import { SCP } from "../styles/SCP"
import { SCReasonTextAndIcon } from "../styles/SCReasonTextAndIcon"

import { useViewportWidth } from "../hooks/useViewportWidth"

export default function Reason({ heading, paragraph, icon }) {
	const viewportWidth = useViewportWidth()

	return (
		<>
			<SCHeading
				as="h3"
				fontsize="clamp(2rem, 1.4vw, 3rem)"
				style={{ marginTop: "3.2rem" }}
			>
				{heading}
			</SCHeading>

			<SCReasonTextAndIcon>
				<SCP color="var(--color-paragraph-black)" marginTop="2rem">
					{paragraph}
				</SCP>
				{viewportWidth > 860 && <div>{icon}</div>}
			</SCReasonTextAndIcon>
		</>
	)
}
