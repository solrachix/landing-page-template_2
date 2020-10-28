import React from 'react'

// import { ReactComponent as Conversation } from '../../assets/conversation_.svg'
import Conversation from '../../assets/conversation_.svg'
import Text from '../Text'
import Button from '../Button'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <main>

        <div className="leftSide">
          <Text className="title" size={7} weight={700} >Acelere <br/>sua carreira<strong>.</strong></Text>
          <br />
          <Text className="subtitle" size={1.4} >
            Treinamento online de 8 semanas com foco em
            <br/><strong>Node.js + ReactJS + React Native</strong>
          </Text>

          <img className="image" src={Conversation} alt=""/>

          <Button>
            Quero garantir minha vaga
          </Button>
        </div>

      </main>
    </Container>
  )
}

export default Header
