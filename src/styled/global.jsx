import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'), local('StratosSkyeng'),
        url('${process.env.PUBLIC_URL}/fonts/StratosSkyeng.woff2') format('woff2'),
        url('${process.env.PUBLIC_URL}/fonts/StratosSkyeng.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
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



//--------------------------

html,
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
    background-color: #383838;
    

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
}
body {
    margin: 0;
    
 
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  `