import { createGlobalStyle } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
*{
    border:0;
    margin:0;
    outline:0;
    box-sizing:border-box;
}
body{
    background: grey;
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
}

html, body, #root{
    height:100%;
}

button{
    cursor: pointer;
}
`;
