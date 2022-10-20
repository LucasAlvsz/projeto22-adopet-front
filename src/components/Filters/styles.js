import styled from "styled-components"

export const HeaderIcons = {
	width: "25px",
	height: "25px",
	cursor: "pointer",
}

export const Filters = styled.header`
	z-index: 4;
	width: auto;
	height: 40px;
	position: fixed;
	top: 10px;
	align-self: center;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	border-radius: 20px;
	gap: 15px;
	padding: 0 20px;
	background-color: white;
	transition: transform 0.2s;
	.selected {
		${HeaderIcons} {
			transform: scale(1.1) translateY(-5%);
			border-bottom: 2px solid #3ec96c;
			border-radius: 50%;
		}
		transition: transform 0.2s;
	}
	:hover {
		transform: scale(1.05);
	}

	button {
		width: 25px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		background-color: #fff;
		font-size: 13px;
		cursor: pointer;
		transition: transform 0.2s;
		&:hover {
			transform: scale(1.05);
			background-color: #90dfaa;
		}
	}
`
