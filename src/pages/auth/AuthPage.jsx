import { Link } from 'react-router-dom'
import * as S from './AuthPage.styled'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'


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
  onAuthButtonClick
}) {
  const navigate = useNavigate()

 
  useEffect(() => {
    setError(null)
  }, [ email, password, repeatPassword])

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
              <S.PrimaryButton disable={primaryButton} onClick={onAuthButtonClick}>
                Зарегистрироваться
              </S.PrimaryButton>
            )}
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  )
}
