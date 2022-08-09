import styled from "styled-components"

export const Content = styled.div`
	width: 100%;
	height: 80%; //CHAGE 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 30px;
	/* margin-top: 70px; */
	background-color: blue;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 30px;
	}
`

export const ContentInfos = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 70px;
	left: 25px;
	gap: 7px;
	span {
		display: flex;
		flex-direction: row;
		gap: 5px;
	}
`

export const Title = styled.h1`
	font-size: 25px;
	font-weight: 700;
	color: #fff;
`

export const InfoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	width: auto;
	background-color: lightgray;
	border-radius: 10px;
	padding: 5px;
	> p {
		font-size: 15px;
		font-weight: 700;
		color: #fff;
	}
`

export const ButtonsContainer = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: -35px;
	gap: 5px;
	button {
		width: 70px;
		height: 100%;
		font-size: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 35px;
		background-color: #fff;
		position: relative;
		p {
			position: absolute;
			bottom: -22px;
			color: #000;
			font-size: 16px;
			font-weight: 700;
		}
	}
`
