import { Link } from 'react-router-dom'
import * as S from './LoginPage.styled'
import { useEffect} from 'react'
import { UserContext } from '../../contexts/Context'

export default function LoginPage({
  error,
  setError,
  email,
  setEmail,
  password,
  setPassword,
  primaryButton,
  onLoginButtonClick
}) {
  useEffect(() => {
    setError(null)
  }, [ email, password])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo-black.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <S.ModalInput
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
        </S.Inputs>
        {error && <S.Error>{error}</S.Error>}
        <S.Buttons>
          {primaryButton ? (
            <S.PrimaryButton>Загрузка...</S.PrimaryButton>
          ) : (
            <UserContext.Consumer>
            {(context)=> <S.PrimaryButton disable="{primaryButton}" onClick={context.handleLogin}>
            {/* {(user) =><StyledSidebarUsername>{user}</StyledSidebarUsername> } */}
              Войти
            </S.PrimaryButton>}
            </UserContext.Consumer>
          )}
          <Link to="/auth">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
