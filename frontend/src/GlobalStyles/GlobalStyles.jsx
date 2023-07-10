import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

* {
    box-sizing:border-box;
    padding:0;
    margin:0;
    text-decoration:none;
    list-style:none;
 }

 body{
    background-color: #14161a;
    color:white;
    overflow:${props => props.isOpen ? 'hidden' : 'visible'};
 }
`
export default GlobalStyles;