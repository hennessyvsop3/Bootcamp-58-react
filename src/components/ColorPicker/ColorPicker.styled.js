import styled from 'styled-components'

export const StyledBackgroundTheme = styled.div`
	background-color: ${props=> props.$bg};
	display: grid;
	place-content: center;
	height: 100vh;
	transition: background-color 0.5s linear;
	width: 100vw;
`
export const StyledColorPalette = styled.div`
	text-align: center;
`
export const StyledColor = styled.li`
	list-style: none;
	border: 3px solid black;
	padding: 10px 15px;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.5s ease;
	background: ${props =>props.$color};

	&:hover {
		background-color: lightcyan;
	}
`
export const StyledColorsList = styled.ul`
	padding: 20px 0;
	display: flex;
	gap: 10px;
`
