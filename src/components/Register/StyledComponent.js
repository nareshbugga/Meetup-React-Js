/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  width: 35%;
  margin-top: 30px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RegisterHeading = styled.h1`
  color: #334155;
  font-weight: bold;
  font-family: 'Roboto';
`
export const RegisterLabel = styled.label`
  color: #7b8794;
  font-weight: 500;
  font-family: 'Roboto';
`

export const RegisterNowButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  color: #ffffffff;
  font-weight: 500;
  font-family: 'Roboto';
  cursor: pointer;
  margin-top: 20px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 15px 0px;
  font-weight: 500;
  font-family: 'Roboto';
  padding-left: 10px;
  outline: none;
`
export const Select = styled.select`
  width: 100%;
  height: 40px;
  margin: 15px 0px;
  font-weight: 500;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  padding-left: 10px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-weight: 500;
  font-family: 'Roboto';
`
