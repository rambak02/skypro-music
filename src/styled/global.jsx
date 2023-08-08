import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: border-box;
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}

._btn {
    cursor: pointer;
}

ul li {
    list-style: none;
}

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url('../public/fonts/StratosSkyeng.woff2') format('woff2'),
        url('../public/fonts/StratosSkyeng.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

//--------------------------

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;

}


// ========== hover ========
._btn-text:hover {
    border-color: #D9B6FF;
    color: #D9B6FF;
    cursor: pointer;
}

._btn-icon:hover svg {
    fill: transparent;
    stroke: #ACACAC;
    cursor: pointer;
}

// ========== activ ========

._btn-text:active {
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
}

._btn-icon:active svg {
    fill: transparent;
    stroke: #FFFFFF;
    cursor: pointer;

}

._btn-icon:active  {
    fill: #696969;
    stroke: #FFFFFF;
    cursor: pointer;
}`