import styled from "styled-components"

export const SCHugePoster = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	animation: scalePoster 10s linear;

	@keyframes scalePoster {
		0% {
			background-size: 100%;
		}

		20% {
			background-size: 102%;
		}

		40% {
			background-size: 104%;
		}

		60% {
			background-size: 106%;
		}

		80% {
			background-size: 108%;
		}

		100% {
			background-size: 110%;
		}
	}
`
