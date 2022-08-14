import styled from "styled-components"

export const OptionIcon = {
	width: "25px",
	height: "25px",
	color: "black",
}

export const LogOutIcon = {
	width: "18px",
	height: "18px",
}

export const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 5px;
	padding: 10px;
	z-index: 2;
	> span {
		width: 35px;
		display: flex;
		justify-content: center;
		border-radius: 20px;
		background-color: #fff;
		:nth-child(2) {
			${({ openMenu }) => openMenu && "border-radius: 20px 20px 0 0;"}
		}
	}
`

export const Menu = styled.div`
	width: 35px;
	height: 50px;
	position: absolute;
	top: 30px;
	right: 10px;
	z-index: 3;
	display: flex;
	align-items: center;
	border-radius: 0 0 20px 20px;
	background-color: #fff;
	> span {
		width: 100%;
		height: 25px;
		display: flex;
		align-items: end;
		justify-content: center;
		cursor: pointer;
	}
	transition: all 2s ease;
`
