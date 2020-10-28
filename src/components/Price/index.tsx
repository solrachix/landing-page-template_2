import React from 'react'

import Text from '../Text'
import Button from '../Button'
import { Container } from './styles'

const Price: React.FC = () => {
  return (
    <Container>
      <Text className="title" size={6} weight={700} align="center">
        <strong>
          IT`S TIME
        </strong>
        <br />

        <Text size={0.26} weight={400} align="center">
          Chegou a hora.
          <br />
          Não perca mais tempo
          <br />
          <b>Você pode tudo que você quer!</b>
          <br />
          <br />
          <Text size={0.8} weight={400} align="center">
            De <strong>R$ 500,00</strong> por
          </Text>
        </Text>
        <strong>12X de R$ 20,00</strong>
      </Text>

      <Text size={1} weight={100} align="center">
        <i>
          No cartão de credito, ou R$ 240,00 à vista no débito
        </i>
      </Text>
      <br/>
      <Button>
        Quero garantir minha vaga
      </Button>
      <br/>
      <Text size={1} weight={100} align="center">
        <i>
          * Vagas limitadas
        </i>
      </Text>
    </Container>
  )
}

export default Price
