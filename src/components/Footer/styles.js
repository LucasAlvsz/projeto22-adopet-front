import styled from "styled-components"

export const FooterIcons = {
	width: "30px",
	height: "30px",
	cursor: "pointer",
}

export const Footer = styled.footer`
	width: 100%;
	height: 60px;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	border-top: 1px solid #eaeaea;
	border-radius: 25px 25px 0 0;
	transition: all 0.3s ease-out;
	box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
	padding: 25px 35px;
	> span {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.selected {
		background-color: red;
	}
`
