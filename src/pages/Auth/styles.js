import styled from "styled-components"

export const Header = styled.header`
	width: 100%;
	height: 50px;
	position: fixed;
	top: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 21px;
	line-height: 25px;
	font-weight: 500;
	color: #333;
	text-transform: uppercase;
	h2 {
		cursor: pointer;
	}
	h2:not(.active) {
		color: #b0b0b0;
	}
	h2.active {
		position: relative;
		transition: after 5s ease;
	}
	h2.active::after {
		content: "";
		display: inline-block;
		width: 74px;
		height: 3px;
		background-color: gray;
		position: absolute;
		left: 0;
		bottom: -5px;
	}
	& h2:last-child {
		margin-left: 53px;
	}
`

export const Form = styled.form`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 160px;
	input {
		width: 100%;
		height: 50px;
		border-radius: 5px;
		max-width: 300px;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		margin-bottom: 15px;
		padding: 10px;
		&::placeholder {
		}
	}
	button {
		width: 150px;
		height: 50px;
		border-radius: 20px;
		margin-top: 40px;
	}
`
