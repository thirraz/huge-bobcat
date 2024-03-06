import styled from "styled-components"

export const SCMovieColumn = styled.div`
	max-width: min-content;
	transform: translateY(-150%);
	animation: scrollDown 120s linear infinite;

	@keyframes scrollDown {
		to {
			transform: translateY(100%);
		}
	}

	@keyframes scrollUp {
		to {
			transform: translateY(-100%);
		}
	}
`
