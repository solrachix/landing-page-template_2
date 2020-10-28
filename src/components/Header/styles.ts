import styled from 'styled-components'

export const Container = styled.section`
  min-width: 0;
  width: 100%;
  max-width: 1160px;
  min-height: 100vh;
  height: fit-content;

  box-sizing: border-box;
  position: relative;

  margin: 0;
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 20px;
  padding-right: 20px; */

  display: flex;
  flex-direction: column;
  justify-content: center;


  > main {
    width: 100%;
    /* height: 100%; */

    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    .leftSide{
      width: 100%;
      max-width: 675px;

      @media screen and (max-width: 60em){
        p {
          text-align: center;
        }
      }

      .title {
        @media (max-width: 1000px) {
          font-size: 80px;
          line-height: 1;
        }
      }

      .subtitle {
        line-height: 156%;
        margin-bottom: 40px;
        width: auto;

        @media screen and (min-width: 40em)  {
          font-size: 16px;
        }
        @media screen and (min-width: 60em) {
          font-size: 20px;
          margin-bottom: 48px;
          max-width: 475px;
        }
      }

      img {
        position: relative;
        top: 0%;
        right: 0%;
        width: 100%;


        @media screen and (min-width: 60em){
          position: absolute;
          top: 2%;
          right: 1%;
          width: 30rem;
        }
      }

      .button {
        max-width: 356px;
        line-height: 72px;

        @media screen and (min-width: 40em) {
          font-size: 18px;
          max-width: 356px;
        }
      }
    }

  }
`
