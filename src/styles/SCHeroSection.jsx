import styled from "styled-components"

export const SCHeroSection = styled.section`
	min-height: 100dvh;
	height: 100dvh;
	display: flex;
	overflow: hidden;

	@media only screen and (max-width: 860px) {
		flex-direction: column;
		height: auto;
		padding-inline: 1rem;
	}
`
