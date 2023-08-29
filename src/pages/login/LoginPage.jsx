import { Link } from 'react-router-dom'
import * as S from './LoginPage.styled'
import { useEffect} from 'react'


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
            <S.PrimaryButton disable="{primaryButton}" onClick={onLoginButtonClick}>
              Войти
            </S.PrimaryButton>
          )}
          <Link to="/auth">
            <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  )
}
