import { SCHeading } from "../styles/SCHeading"
import { SCReasons } from "../styles/SCReasons.jsx"
import Reason from "./Reason.jsx"

import Monitor from "../components/icons/Monitor.jsx"
import Dollar from "../components/icons/Dollar.jsx"
import Send from "../components/icons/Send.jsx"

const reasonsData = [
	{
		title: "Watch where you want",
		paragraph:
			"You can watch on your Smart TV, Mobile Device, PC and your VideoGame",
		icon: <Monitor />
	},
	{
		title: "Cheaper than other platforms",
		paragraph:
			"We make a cheaper platform to make you save more money, being able to buy more things to you, like popcorn!",
		icon: <Dollar />
	},
	{
		title: "A better catalog",
		paragraph:
			"We listen to our customer, and if you would like to see a movie that don’t be in our platform, you can contact us by send an e-mail to hugebobcat@gmail.com",
		icon: <Send />
	}
]

export default function Reasons() {
	return (
		<SCReasons>
			<SCHeading fontsize="clamp(1.8rem, 5vw, 4.7rem)" as="h2">
				Why choose us?
			</SCHeading>

			<div style={{ maxWidth: "64rem" }}>
				{reasonsData.map(({ icon, title, paragraph }, i) => (
					<Reason
						icon={icon}
						heading={title}
						paragraph={paragraph}
						key={i}
					/>
				))}
			</div>
		</SCReasons>
	)
}
