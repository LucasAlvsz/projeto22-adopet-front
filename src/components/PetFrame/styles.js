import styled from "styled-components"

export const InfoIcon = {
	color: "#fff",
	fontSize: "15px",
}

export const VaccineIcon = {
	width: "30px",
	height: "30px",
	color: "#fff",
}

export const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 30px;
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

export const VaccineIconContainer = styled.div`
	width: 33px;
	height: 33px;
	position: absolute;
	bottom: 85px;
	right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	border: 2px solid #fff;
	padding: 5px;
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
	border-radius: 10px;
	padding: 5px;
	background-color: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(15px);
	> p {
		font-size: 15px;
		font-weight: 700;
		color: white;
		margin: 0 5px;
	}
`

export const ButtonsContainer = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: -30px;
	gap: 5px;
	img {
		width: 60px;
		height: 60px;
		background-color: #00aef0;
	}
	button {
		width: 60px;
		height: 100%;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
		background-color: #fff;
		position: relative;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		p {
			position: absolute;
			bottom: -22px;
			color: #2d3051;
			font-size: 16px;
			font-weight: 700;
			font-family: "Roboto", sans-serif;
		}
	}
`
