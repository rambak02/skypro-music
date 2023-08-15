import { LoginForm } from '../../component/LoginForm/LoginForm'
import { StyledLoginContainer } from './LoginPage.styled'

export const Login = ({ onAuthButtonClick }) => {
  return (
    <StyledLoginContainer>
      <LoginForm onAuthButtonClick={onAuthButtonClick} />
    </StyledLoginContainer>
  )
}
