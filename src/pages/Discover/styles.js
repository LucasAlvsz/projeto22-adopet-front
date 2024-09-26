import styled from "styled-components"

export const Discover = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: #f2f4f3;
`

export const Container = styled.div`
	width: 100%;
	height: 75%;

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 65px;
	}
`
