import React from 'react'

import seal from '../../assets/seal.svg'
import Text from '../Text'
import Button from '../Button'
import { Container } from './styles'

const Guarantee: React.FC = () => {
  return (
    <Container>

      <img src={seal} alt="Selo de garantia"/>

      <Text size={1} align="center">
        Se você não gostar, pode pedir o seu dinheiro de volta, <b>sem complicação</b>! Assim você não tem desculpas para não começar a aprender inglês de verdade!
      </Text>
      <Button>
        Quero garantir minha vaga
      </Button>
    </Container>
  )
}

export default Guarantee
