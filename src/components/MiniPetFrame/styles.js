import styled from "styled-components"

export const InfoIcon = {
	color: "#00aef0",
	fontSize: "15px",
}

export const MiniPetFrame = styled.div`
	width: 165px;
	height: 200px;
	position: relative;
	border-radius: 20px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
`

export const petInfo = styled.div`
	width: 100%;
	height: auto;
	position: absolute;
	top: 10px;
	left: 10px;
	display: flex;
	flex-direction: column;
	color: white;
	> h1 {
		font-size: 20px;
		font-weight: 700;
	}
	> p {
		display: flex;
		align-items: end;
		gap: 5px;
		font-size: 13px;
		font-weight: 400;
		margin-top: 30px;
	}
`
