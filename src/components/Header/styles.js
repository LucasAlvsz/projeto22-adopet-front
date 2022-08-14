import styled from "styled-components"

export const OptionIcon = {
	width: "25px",
	height: "25px",
	color: "black",
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
		background-color: #f2f4f3;
	}
`
