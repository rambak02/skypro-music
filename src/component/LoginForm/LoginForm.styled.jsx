import { styled, css } from 'styled-components'

export const StyledLoginForm = styled.div`
  width: 366px;
  height: 439px;
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`
export const StyledLoginInput = styled.input`
  font-family: 'StratosSkyeng', sans-serif;
  outline: none;
  height: 35px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.003em;
  text-align: left;

  width: 278px;
  border: none;
  border-bottom: 1px solid #d0cece;
  &::placeholder {
    color: #d0cece;
  }
`

const buttonMixin = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 278px;
  height: 52px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.003em;
`
export const StyledLoginButton = styled.button`
  ${buttonMixin}

  margin-top: 30px;
  color: #ffffff;
  background: #580ea2;
  border: none;
`
export const StyledSignUpButton = styled.button`
  ${buttonMixin}

  border: 1px solid #D0CECE;
  color: #000000;
`
export const StyledLoginImg = styled.img`
  margin-top: 40px;
  width: 140px;
  height: 21px;
`
