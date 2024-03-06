import styled from "styled-components"

export const SCDesktopMoviePoster = styled.div`
	width: 16rem;
	height: 22rem;

	background-size: cover;
	background-position: center;
	border-radius: 9px;
	box-shadow: 6px 13px 8.9px hsl(0, 0%, 0%, 40%);

	&:not(:last-child) {
		margin-bottom: 1.8rem;
	}
`
