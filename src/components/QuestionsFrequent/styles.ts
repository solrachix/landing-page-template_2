import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1168px;
  padding: 0 24px;
  margin: 200px auto;

  overflow: hidden;

  .title {
    font-size: 48px;
    line-height: 64px;
    font-weight: bold;
    margin-bottom: 80px;
  }

  .button {
    margin-top: 60px;
    margin-bottom: 10px;

    width: 100%;
    max-width: 300px;

    float: right;
  }
`

export const Question = styled.div`
  margin-bottom: 8px;

  button {
    display: flex;
    align-items: center;

    width: 100%;
    min-height: 80px;
    padding: 20px 35px;

    font-size: 24px;
    @media (max-width: 960px) {
      font-size: 16px;
    }

    background-color: ${props => props.theme.colors.themeColors.background.dark};
    border: none;
    border-radius: 5px;

    cursor: pointer;
    user-select: none; 
    transition: all 200ms;

    .question {
      flex: 1;
      margin: 0 30px;
    }

    .icon {
      width: 30px;
      height: 30px;

      border-radius: 15px;
      border: 2px solid ${props => props.theme.colors.themeColors.primary.normal};

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: ${props => props.theme.colors.themeColors.text.normal};
      }
    }
  }

  .response{
    display: none;
    padding: 20px 100px;

    font-size: 16px;
    line-height: 30px;

    background-color:  ${props => props.theme.colors.themeColors.background.darker};
    color:  ${props => rgba(props.theme.colors.themeColors.text.normal, 0.8)};
    border-radius: 0 0 5px 5px;
  }

  &.selected {
    .response{
      display: block;
    }
  }
`
