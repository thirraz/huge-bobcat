import styled from "styled-components"

export const SCDontWasteMoreTimeComponent = styled.div`
	display: flex;
	padding-inline: var(--padding-desktop);
	justify-content: center;
	gap: 10rem;
	padding-block: 5rem;

	@media only screen and (max-width: 860px) {
		flex-direction: column;
	}
`
