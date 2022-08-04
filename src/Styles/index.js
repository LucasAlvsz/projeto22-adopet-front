import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
        outline: 0;
        padding: 0;
        border: 0;
        margin: 0;
        word-break: break-word;
    }
    
    button {
        cursor: pointer;
    }
    html, body, #root {
        background-color:#333333;
    }
    :root {
        --primary-color: #F2F4F3;
        --secondary-color:#FFFFFF;
        --primary-font: "Lato", sans-serif;
        --secondary-font: "Oswald", sans-serif;
    }
`
