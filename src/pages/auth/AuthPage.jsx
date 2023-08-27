import { Link } from 'react-router-dom'
import * as S from './AuthPage.styled'
import { useEffect, useState } from 'react'
import { authUser } from '../../api'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../login/LoginPage'

export default function AuthPage({
  error,
  setError,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
  primaryButton,
  setPrimaryButton,
}) {
  const [isLoginMode, setIsLoginMode] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async () => {
    setPrimaryButton(true)
    if (email === '' && password === '') {
      setError('Укажите email и пароль')
    } else if (email === '') {
      setError('Укажите email')
    } else if (password === '') {
      setError('Укажите пароль')
    } else if (password !== repeatPassword) {
      setError('Пароли не совпадают')
    } else {
      try {
        const response = await authUser(email, password)
        console.log('Пользователь успешно зарегистрирован:', response)
        navigate('/login', { replace: true })
      } catch (error) {
        setError(error.message)
      }
    }
    setPrimaryButton(false)
  }
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo-black.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        <>
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
            <S.ModalInput
              type="password"
              name="repeat-password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value)
              }}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons>
            {primaryButton ? (
              <S.PrimaryButton>Загрузка...</S.PrimaryButton>
            ) : (
              <S.PrimaryButton disable={primaryButton} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            )}
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  )
}
