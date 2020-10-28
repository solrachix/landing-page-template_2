import styled from 'styled-components'

export const Container = styled.section`
    position: relative;
    width: 100%;
    max-width: 1168px;
    margin: 0 auto;
    margin-top: 140px;

    overflow: hidden;

    .title {
      font-size: 48px;
      line-height: 64px;
      font-weight: bold;
    }

    ul {
      margin-top: 80px;
      width: 100%;

      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(30%,1fr));
      grid-gap: 32px;
      list-style: none;

      li > div:first-child {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 0;

        div {
          position: relative;
          width: 100%;
          height: 0;
          padding: 0 0 56.5% 0;
          overflow: hidden;
          background: #000000;
          border-radius: 5px;
          
          iframe {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
          }
        }
      }

      li > div:last-child {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-left: 0;
        width: 100%;
      }

      @media (max-width: 1000px) {
        margin-top: 0;
        grid-template-columns: repeat(auto-fill,minmax(50%,1fr));
        grid-gap: 16px;

        li {
          flex-direction: column;
        }
        li > div:first-child {
          width: 100%;
          margin-bottom: 24px;
        }    
        li > div:last-child {
          width: 100%;
          margin-left: 0;
        } 
      }
    }
`
