import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    padding: 0 2rem;
    border-radius: 12px;
    background-color: #fff;

    label {
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      margin-bottom: 1rem;

      &:focus {
        outline: none;
        border-color: #0070f3;
      }
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #0070f3;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #005fb2;
      }
    }
  }
`