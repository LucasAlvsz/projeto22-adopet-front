import styled from "styled-components"

export const Discover = styled.div`
  width: 100%;
  height: calc(100vh - 135px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 45px;
  background-color: #f2f4f3;

  @media (min-width: 768px) {
    padding: 40px;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
