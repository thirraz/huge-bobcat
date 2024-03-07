import { SCTestimonials } from "../styles/SCTestimonials"
import { SCHeading } from "../styles/SCHeading"
import Testimonial from "./Testimonial"
import { SCTestimonialsContainer } from "../styles/SCTestimonialsContainer"

const allTestimonials = [
	{
		profilePic: "/user01.png",
		username: "Nicolly Cakefield",
		usingSince: "Use Huge Bobcat since 2022",
		testimonial:
			"I’m loving Huge Bobcat! The quality of the movies is amazing, and the fact that it has subtitles and dubs in multiple languages makes the experience even better. In addition, the two-week free trial period allowed me to explore everything the platform offers before deciding to subscribe. Definitely recommend it!"
	},
	{
		profilePic: "/user02.png",
		username: "Juliet Wilson",
		usingSince: "Use Huge for 5 months",
		testimonial:
			"Huge Bobcat is so great ! I was looking for an accessible streaming platform with a variety of content, and found all this and more here. The interface is very easy to use, and the fact that you can cancel at any time without complications is a great differential. I am impressed with the quality of service!"
	},
	{
		profilePic: "/user03.png",
		username: "Amanda Jones",
		usingSince: "Use Huge Bobcat for 3 months",
		testimonial:
			"Simply sensational! From the moment I signed up and enjoyed the two free weeks, I was impressed with the amount of movies available and the ease of finding what I wanted to watch. The subtitles and voiceovers in several languages are a big plus point, and the affordable price made me decide to continue as a subscriber. I recommend it to all movie lovers!"
	},
	{
		profilePic: "/user04.png",
		username: "Robert Junior",
		usingSince: "Use Huge Bobcat for 1 month",
		testimonial:
			"I am completely impressed with Huge Bobcat! In addition to offering a wide range of films for an affordable price, the possibility to test for free for two weeks before committing was a big plus. The ease of finding movies with subtitles and voiceovers in multiple languages is fantastic. I’m definitely recommending it to all my friends!"
	}
]

export default function Testimonials() {
	return (
		<SCTestimonials>
			<SCHeading fontsize="clamp(2.5rem, 5vw, 4.7rem)" as="h2">
				We love our customers
			</SCHeading>
			<SCTestimonialsContainer>
				{allTestimonials.map(
					({ profilePic, testimonial, username, usingSince }, i) => (
						<Testimonial
							profilePic={profilePic}
							testimonial={testimonial}
							username={username}
							usingSince={usingSince}
							key={i}
						/>
					)
				)}
			</SCTestimonialsContainer>
		</SCTestimonials>
	)
}
