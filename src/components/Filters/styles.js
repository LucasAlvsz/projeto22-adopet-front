import styled from "styled-components"

export const HeaderIcons = {
	width: "25px",
	height: "25px",
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
	.selected {
		width: 30px !important;
		height: 30px !important;
		background-color: #d9d9d9;
		border-radius: 20px;
	}
	p:nth-child(5) {
		width: 25px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: blueviolet;
		border-radius: 20px;
		background-color: #d9d9d9;
		font-size: 13px;
	}
	transition: all 1s ease-in-out;
`
