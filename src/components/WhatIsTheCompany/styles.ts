import styled from 'styled-components'

import teacher from '../../assets/teacher.svg'

export const Container = styled.section`
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  margin-top: 445px;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 60em) {
    margin-top: 100px;
    align-items: flex-start;
    flex-direction: row;
  }

  .a {
    position: relative;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 888px;
      height: 888px;
      
      transform: translate(-25%,-20%);
      background: url(${teacher}) center no-repeat;
      background-size: contain;
      /* z-index: -1; */

      @media (max-width: 960px) {
        width: 100%;
        /* background: url(/_next/static/images/toptech-about-wait-mb-4d0cb9e….svg) center no-repeat; */
        transform: translate(0,-35%);
        right: 0;
        margin: auto;
      }

      @media (max-width: 1160px){
        width: 453px;
        height: 453px;
        transform: translate(0,0);
      }
    }
  }

  .b {
    height: 100%;
    width: 100%;
    max-width: 544px;

    .title {
      font-size: 32px;
      max-width: 382px;
      margin-bottom: 40px;
    
      @media screen and (min-width: 60em){
        font-size: 48px;
      }
    }

    p {
      line-height: 1.5;
      
      &:not(:last-child) {
        margin-bottom: 40px;
      }
      @media screen and (min-width: 40em) {
        font-size: 18px;
        
        .subtitle {
          font-size: 24px;
        }
      }
    }
  }
`
