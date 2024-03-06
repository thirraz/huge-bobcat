import styled from "styled-components"

export const SCTestimonialsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 3rem;
	margin-block: min(10rem, 10vh);
	padding-inline: 6rem;

	@media only screen and (max-width: 860px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, min-content);
	}
`
