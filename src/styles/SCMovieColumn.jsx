import styled from "styled-components"

export const SCMovieColumn = styled.div`
	max-width: min-content;
	transform: translateY(-150%);
	animation: scrollDown 30s linear infinite;

	@keyframes scrollDown {
		to {
			transform: translateY(-1%);
		}
	}
`
