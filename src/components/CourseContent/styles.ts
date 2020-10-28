import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1168px;
  margin: 0 auto;
  margin-top: 140px;


  .content{
    margin-top: 80px;
    display: block;
    position: relative;

    @media (max-width: 1170px){
      margin-top: 40px;
    }

    .card {
      position: relative;
      width: 100%;
      max-width: 1024px;
      min-height: 214px;
      margin-left: auto;
      padding: 40px;

      display: flex;
      align-items: flex-start;
      flex-direction: row;

      background: linear-gradient( 163.51deg, ${props => props.theme.colors.themeColors.background.lighter} 13.32%, ${props => props.theme.colors.themeColors.background.light} 100% );
      border-radius: 5px;
      
      &:not(:last-child) {
        margin-bottom: 32px;
      }

      header {
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 40px;

        img{
          width: 80px;
          height: 80px;

          filter: opacity(0.5);
        }

        p{
          position: absolute;
          top: 50%;
          left: -11%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;

          background: ${props => props.theme.colors.themeColors.background.darker};
          border-radius: 50%;
          border: 2px solid ${props => props.theme.colors.themeColors.primary.normal};

          display: block;
          text-align: center;

          z-index: 2;

          &:after, &:before {
            content: '';
            position: absolute;
            width: 2px;
            height: 400%;
            /* left: -94px; */
            background: ${props => props.theme.colors.themeColors.background.darker};
            z-index: -1
          }

          /* &:before{
            top: -16px;
          } */
          &:after {
            bottom: 0px;
          }


          @media (max-width: 1170px) {
            position: relative;
            display: block;
            
            top: 0%;
            left: 0%;
            transform: translateY(0%);

            &:after, &:before {
              display: none;
            }
          }
          span {
            display: block;
            text-align: center;
            font-weight: bold;
            color: ${props => props.theme.colors.themeColors.text.normal};
            font-size: 14px;
            line-height: 36px;
          }
        }

      }

      &:first-child {
        header p::after{
            display: none;
          }
      }
      &:last-child {
        header p::before{
            display: none;
          }
      }

      section {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        .contentTitle{
          line-height: 1;
          margin-bottom: 24px;
        }

        .description {
          width: 100%;
          font-size: 16px;
          line-height: 28px;

          opacity: 0.6;
        }
      }

      @media (max-width: 1170px) {
        max-width: 100%;
        padding: 30px;
        
        background: ${props => props.theme.colors.themeColors.background.lighter};

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        header {
          margin-right: 0;
          margin-bottom: 32px;
          background-size: 100% auto;
          width: 100%;
        }
      }
    }
  }
`
