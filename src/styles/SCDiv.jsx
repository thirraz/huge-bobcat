import styled from "styled-components"

export const SCDiv = styled.div`
	max-width: 100%;
	width: 45%;

	@media only screen and (max-width: 860px) {
		width: 100%;
		text-align: center;

		& button {
			display: block;
			margin-inline: auto;
		}
	}
`
