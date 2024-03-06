import { SCHugePoster } from "../styles/SCHugePoster"
import { SCOverlay } from "../styles/SCOverlay"

export default function HugePoster({ bgImg }) {
	return (
		<>
			<SCHugePoster style={{ backgroundImage: bgImg }}>
				<SCOverlay />
			</SCHugePoster>
		</>
	)
}
