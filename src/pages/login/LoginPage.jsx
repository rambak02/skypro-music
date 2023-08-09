import { LoginForm } from "../../component/LoginForm/LoginForm"
import { styled } from "styled-components"

const StyledLoginContainer = styled.div`
background-color: #383838;
display: flex;
align-items: center;
justify-content: space-around;
width: 100vw;
height: 100vh;
`

export const Login = () => {
    return (
        <StyledLoginContainer >
            <LoginForm/>
        </StyledLoginContainer>
    )
    }