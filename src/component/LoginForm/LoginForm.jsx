import { Link } from "react-router-dom"
import { StyledLoginForm, StyledLoginImg, StyledLoginInput, StyledLoginButton, StyledSignUpButton } from "./LoginForm.styled"

export const LoginForm = ({onAuthButtonClick}) => {
   
    return (
 <StyledLoginForm>
         <StyledLoginImg src="img/logo-black.png" alt="Логотип" /> 
        <StyledLoginInput  type="text" placeholder="Почта"/>
        <StyledLoginInput type="password" placeholder="Пароль"/>
        <StyledLoginButton onClick={onAuthButtonClick} >Войти</StyledLoginButton>
        <Link to="/register">
        <StyledSignUpButton>Зарегистрироваться</StyledSignUpButton></Link>
</StyledLoginForm>
    )
    }