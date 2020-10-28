import styled from 'styled-components'

export const Container = styled.section`
  box-sizing: border-box;

  margin: 0;
  min-width: 0;
  margin-top: 140px;

  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  
  @media screen and (min-width: 60em) {
    margin-top: 260px;
  }
  @media screen and (min-width: 60em) {
    flex-direction: row;
  }

  .a {
    max-width: 100%;

    @media screen and (min-width: 60em) {
      max-width: 328px;
    }

    .title {
      font-size: 32px;
      display: none;

      @media screen and (min-width: 60em) {
        font-size: 54px;
        display: block;
      }

    }

    .changeSlide{
      width: 100%;
      max-width: 100%;
      min-width: 0px;
      margin: 40px 0px 0px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;

      button {
        width: 40px;
        height: 40px;
        margin-right: 8px;

        background-color: ${props => props.theme.colors.themeColors.primary.normal};
        color: ${props => props.theme.colors.themeColors.text.normal};
        border-radius: 5px;
        border: none;

        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      }


      .dots {
        /* max-width: 160px; */
        margin-left: 0px;

        display: flex;
        align-items: center;
        @media screen and (min-width: 60em)  {
          /* margin-left: 64px; */
        }

        .dot {
          width: 8px;
          height: 8px;

          background-color: ${props => props.theme.colors.themeColors.background.light};
          border: none;
          border-radius: 50%;
          
          transition: all 0.2s linear 0s;

          &:not(:last-child) {
            margin-right: 16px;
          }
          &.active{
            width: 24px;
            border-radius: 6px;
            background-color: ${props => props.theme.colors.themeColors.primary.normal};
          }
        }
      }
    }
  }

  .b {
    width: 100%;
    max-width: 740px;

    .keen-slider, .keen-slider__slide {
      overflow: hidden;
      position: relative;
    }

    .keen-slider{
      display: flex;
      user-select: none;
      -webkit-touch-callout: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;

      [class^="number-slide"],
      [class*=" number-slide"] {
        /* height: 300px; */
        /* max-height: 100vh; */

        font-size: 50px;
        font-weight: 500;

        background: transparent;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        hr {
          margin-top: 24px;
          margin-bottom: 24px;
          width: 100%;
          border: 0;
          border-top: 1px solid ${props => props.theme.colors.themeColors.background.dark};

          @media screen and (min-width: 60em) {
            margin-top: 64px;
            margin-bottom: 64px;
          }
        }
      }
    }
  }
  

`

export const Comment = styled.div`
  min-width: auto !important;

  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 32px;

    path {
      fill: ${props => props.theme.colors.themeColors.primary.normal}
    }

    @media screen and (min-width: 40em) {
      width: 32px;
      height: 32px;
    }
  }

  div {
    font-size: 15px;
    line-height: 156%;
    width: 100%;
    max-width: 576px;

    @media screen and (min-width: 40em) {
      font-size: 16px;
    }
    
    p { 
      font-weight: normal;
    }
    
    p + p {
      font-weight: 700;
      margin-top: 24px;
      margin-bottom: 4px;
    }
    
    .name{
      color: ${props => props.theme.colors.themeColors.primary.normal};
    }
    @media screen and (min-width: 60em) {
      p + p {
        margin-top: 32px;
        margin-bottom: 0;
      }
    }
  }
`
