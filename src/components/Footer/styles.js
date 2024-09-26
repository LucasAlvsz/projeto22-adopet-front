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
	background-color: #fff;
	.selected {
		${FooterIcons} {
			transform: scale(1.1) translateY(-5%);
			border-bottom: 2px solid #0070f3;
			border-radius: 50%;
		}
	}

	@media (min-width: 768px) {
		max-width: 768px;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 25px;
		bottom: 15px;
	}
`
