import { Link, useNavigate } from 'react-router-dom'
import * as S from './LoginPage.styled'
import { useEffect, useState } from 'react'
import { loginUser } from '../../api'


export default function LoginPage({
  isLoginMode = false,
  error,
  setError,
  email,
  setEmail,
  password,
  setPassword,
  primaryButton,
  setPrimaryButton,
}) {
  const navigate = useNavigate()
  const handleLogin = async () => {
    setPrimaryButton(true)
    if (email === '' && password === '') {
      setError('Укажите email и пароль')
    } else if (email === '') {
      setError('Укажите email')
    } else if (password === '') {
      setError('Укажите пароль')
    } else {
      try {
        const response = await loginUser(email, password)
        console.log('Пользователь успешно зашел:', response)
        navigate('/', { replace: true })
      } catch (error) {
        setError(error.message)
      }
    }
    setPrimaryButton(false)
  }


  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password])

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
              <S.PrimaryButton disable={primaryButton} onClick={handleLogin}>
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
