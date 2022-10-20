import styled from "styled-components"

export const InfoIcon = {
	color: "#fff",
	fontSize: "15px",
}

export const MiniPetFrame = styled.div`
	width: 165px;
	height: 200px;
	position: relative;
	border-radius: 15px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	transition: transform 0.2s;
	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 15px;
	}
	:hover {
		cursor: pointer;
		transform: scale(1.02) translateY(-10px);
		filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
	}
`

export const petInfo = styled.div`
	width: auto;
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
		margin-top: 25px;
		background-color: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		border-radius: 10px;
		padding: 3px;
	}
`
