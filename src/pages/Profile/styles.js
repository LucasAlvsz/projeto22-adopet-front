import styled from "styled-components"

export const PictureOptions = {
	width: "27px",
	height: "27px",
	backgroundColor: "white",
	borderRadius: "50%",
}

export const Pictures = styled.div`
	width: 100%;
	height: 300px;
	background-color: green;
	position: relative;
	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Options = styled.div`
	width: 100%;
	height: auto;
	position: absolute;
	top: 35%;
	justify-content: ${({ firstImage }) => (firstImage ? "flex-end" : "space-between")};
	display: flex;
	z-index: 1;
	padding: 0 10px;
`

export const Infos = styled.div`
	width: 100%;
	height: calc(100vh - 270px);
	display: flex;
	flex-direction: column;
	overflow: auto;
	padding: 25px;
	border-radius: 38px 38px 0 0;
	position: absolute;
	top: 270px;
	background-color: #f2f4f3;
	::-webkit-scrollbar {
		width: 5px;
	}
`

export const HeaderInfos = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	> span {
		flex-direction: column;

		> h2 {
			font-size: 26px;
			font-weight: 700;
			color: #2d3051;
			font-family: "DynaPuff", cursive;
		}
		> p {
			font-size: 16px;
			font-weight: 400;
			margin-top: 10px;
		}
	}
	> div {
		width: 30px;
		height: 30px;
		border-radius: 15px;
		align-items: center;
		background-color: gray;
	}
`

export const PetCharacteristics = styled.div`
	width: 100%;
	max-width: 400px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 30px;
	font-family: "DynaPuff", cursive;
	color: #2d3051;
	h4 {
		font-size: 15px;
	}
	p {
		font-size: 10px;
		color: #f2f4f3;
	}
	> div:nth-child(1) {
		background-color: #90dfaa;
	}
	> div:nth-child(2) {
		background-color: #ef7ba9;
	}
	> div:nth-child(3) {
		background-color: #00aef0;
	}
`

export const CharacteristicContainer = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 35%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	> h5 {
		font-size: 14px;
	}
	> p {
		font-size: 12px;
		font-weight: 300;
		margin-top: 7px;
	}
`
export const OwnerInfos = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	position: relative;

	margin-top: 25px;
	> img {
		width: 60px;
		height: 60px;
		border-radius: 40px;
		object-fit: cover;
		margin-top: 5px;
	}
	> div {
		margin: 15px;
		h4 {
			font-size: 16px;
		}
		p {
			font-size: 12px;
			margin-top: 5px;
		}
	}
	> span {
		display: flex;
		position: absolute;
		right: 0;
		gap: 10px;
		div {
			width: 30px;
			height: 30px;
			background-color: gray;
			border-radius: 10px;
		}
	}
`

export const About = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 25px;
	margin-bottom: 35px;
	font-size: 15px;
`

export const Footer = styled.footer`
	width: calc(100% - 50px);
	height: 50px;
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 25px;
	button {
		width: 100%;
		max-width: 300px;
		height: 50px;
		border-radius: 20px;
		background-color: lightblue;
		margin-top: 15px;
		font-family: "DynaPuff", cursive;
		color: #2d3051;
	}
`
