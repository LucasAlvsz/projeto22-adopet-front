import styled from "styled-components"

export const Logo = styled.h1`
	width: 100%;
	position: absolute;
	top: 30px;
	display: flex;
	justify-content: center;
	font-family: "DynaPuff", cursive;
	font-size: 35px;
	color: #2d3051;
`

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: #aabac9;
	position: relative;
	overflow: hidden;
`

export const Header = styled.header`
	z-index: 3;
	width: 100%;
	height: 50px;
	position: fixed;
	top: 90px;
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
		color: slategrey;
	}
	h2.active {
		position: relative;
		transition: after 5s ease;
		color: #fff;
	}
	h2.active::after {
		content: "";
		display: inline-block;
		width: 74px;
		height: 3px;
		background-color: #fff;
		position: absolute;
		left: 0;
		bottom: -5px;
	}
	& h2:last-child {
		margin-left: 53px;
	}
`

export const Form = styled.form`
	z-index: 3;
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
		margin-top: 20px;
		background-color: #fff;
		color: #2d3051;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		:hover {
			background-color: #432a78;
		}
	}
`

export const ErrorWarning = styled.p`
	z-index: 3;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	color: tomato;
	margin-top: 10px;
`
export const AnimationContainer = styled.div`
	z-index: 1;
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: -1%;
	left: 0;
`
