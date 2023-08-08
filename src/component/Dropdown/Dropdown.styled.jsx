import { styled, css } from "styled-components"

export const StyledFilterCenterBlock = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 51px;
`
export const StyledFilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`
export const StyledFilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #FFFFFF;
border-radius: 60px;
padding: 6px 20px;
margin-right: 10px;
cursor: pointer;
`
const dropdownMixin = css`
border-radius: 34px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-between;
position:absolute;
width: 248px;
height: 305px;
padding: 20px;
background: #313131;
color: white;
gap: 24px;
margin: 10px;
z-index: 99;
`
export const StyledDropdown = styled.ul`
${dropdownMixin}
`
export const StyledDropdownContainer =styled.div`
${dropdownMixin}
padding: 0px 15px;
width: 180px;
    height: 237px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 2px; 
    }
    &::-webkit-scrollbar-track {
        background: grey;       
      }
    &::-webkit-scrollbar-thumb {
        background-color: white;    
        border-radius: 20px;
       
    }
`
export const StyledDropdownText = styled.li`
cursor: pointer;

&:hover {
text-decoration: underline;
color: #AD61FF;
}
`