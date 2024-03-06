import { SCHeading } from "../styles/SCHeading"
import { SCStepsContainer } from "../styles/SCStepsContainer"
import { SCSteps } from "../styles/SCSteps"
import Step from "./Step"

const stepsData = [
	{
		img: "/icon-step1.png",
		title: 'Click on "Start 2-free-week"',
		paragraph: "This will be the first step to watch your favorites movies"
	},
	{
		img: "/icon-step2.png",
		title: "Fill the form with your infos",
		paragraph:
			"We need this to give to you 2 WEEKS to use Huge Bobcat for free! It's awesome uhn?"
	},
	{
		img: "/icon-step3.png",
		title: "Every thing finished!",
		paragraph:
			"In the last step you will can watch your favorite movies, paying less!"
	}
]

export default function Steps() {
	return (
		<SCSteps>
			<SCHeading fontsize="clamp(1.8rem, 5vw, 4.7rem)" as="h2">
				Don&apos;t waste more time
			</SCHeading>

			<SCStepsContainer>
				{stepsData.map(({ img, title, paragraph }, i) => (
					<Step icon={img} title={title} paragraph={paragraph} key={i} />
				))}
			</SCStepsContainer>
		</SCSteps>
	)
}
