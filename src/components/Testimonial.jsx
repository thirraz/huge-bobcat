import { SCIcon } from "../styles/SCIcon"
import { SCP } from "../styles/SCP"
import { SCTestimonial } from "../styles/SCTestimonial"
import { SCUsernameAndRole } from "../styles/SCUsernameAndRole"

export default function Testimonial({
	profilePic,
	username,
	usingSince,
	testimonial
}) {
	return (
		<SCTestimonial>
			<SCUsernameAndRole>
				<SCIcon
					width="45px"
					height="45px"
					src={profilePic}
					alt="user icon"
					style={{ marginBottom: 0, alignSelf: "center" }}
				/>
				<div>
					<SCP color="var(--color-user-name)" style={{ marginBlock: 0 }}>
						{username}
					</SCP>
					<SCP
						color="var(--color-role)"
						style={{ marginBlock: 0, gridColumn: 2, fontSize: "1.3rem" }}
					>
						{usingSince}
					</SCP>
				</div>
			</SCUsernameAndRole>
			<SCP
				color="var(--color-testimonial)"
				style={{ marginBlock: "2rem", fontWeight: 400 }}
			>
				{testimonial}
			</SCP>
		</SCTestimonial>
	)
}
