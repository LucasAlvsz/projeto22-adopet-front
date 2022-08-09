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

    main {
	    width: 100%;
	    height: 100vh;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
        overflow: auto;
        /* justify-content: center; */
    }
    
    button {
        cursor: pointer;
    }
    html, body, #root {
        background-color:#fff;
    }
    :root {
        --primary-color: #F2F4F3;
        --secondary-color:#FFFFFF;
        --primary-font: "Lato", sans-serif;
        --secondary-font: "Oswald", sans-serif;
    }
`
