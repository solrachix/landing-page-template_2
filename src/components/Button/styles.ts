import styled, { css } from 'styled-components'

export const Button = styled.button`${({ theme: { colors } }) => css`
  width: 100%;
  max-width: 100%;

  margin: 0;
  word-break: break-word;

  background-color: ${colors.themeColors.primary.normal};
  color: ${colors.themeColors.text.light};
  box-shadow: 0px 6px 0px ${colors.themeColors.primary.darker};
  border: none;
  border-radius: 5px;

  font-family: Roboto, sans-serif !important;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  line-height: 64px;

  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
`}`
