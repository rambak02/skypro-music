import { styled } from "styled-components"

export const StyledCenterblockSearch = styled.div`
        width: 100%;
        border-bottom: 1px solid #4E4E4E;
        margin-bottom: 51px;
        display: flex;
        flex-direction: row;
        align-items: center;
` 

export const StyledSearchSvg = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #FFFFFF;
fill: transparent;
` 
export const StyledSearchText = styled.input`
flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;

&::placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
` 
