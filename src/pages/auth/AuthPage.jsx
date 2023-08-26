import { Link } from 'react-router-dom'
import * as S from './AuthPage.styled'
import { useEffect, useState } from 'react'
import { authUser } from '../../api'




export default function AuthPage({
  isLoginMode = false,
  error,
  setError,
  email,
  setEmail,
  password,
  setPassword,
  repeatPassword,
  setRepeatPassword,
}) {
const [primaryButton, setPrimaryButton] = useState(false)

  const handleLogin = async ({ email, password }) => {
    alert(`Выполняется вход: ${email} ${password}`)
    setError('Неизвестная ошибка входа')
  }

  const handleRegister = async () => {
    setPrimaryButton(true)
    if (email === '' && password === '') {
     
      setError('Укажите email и пароль');
    } else if (email === '') {
      setError('Укажите email');
    } else if (password === '') {
      setError('Укажите пароль');
    } else if (password !== repeatPassword) {
      setError('Пароли не совпадают');
    } else {
      try {
        
        const response = await authUser(email, password);
        console.log('Пользователь успешно зарегистрирован:', response);
      } catch (error) {
        setError(error.message); 
      }
     
    }
    setPrimaryButton(false)
  };
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
        {isLoginMode ? (
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
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton > </S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
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
              {primaryButton ? <S.PrimaryButton>Загрузка...</S.PrimaryButton> : <S.PrimaryButton disable={primaryButton} onClick={handleRegister}>Зарегистрироваться</S.PrimaryButton>}
              
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
