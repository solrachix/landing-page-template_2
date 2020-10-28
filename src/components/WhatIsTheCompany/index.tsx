import React from 'react'

import Text from '../Text'
import { Container } from './styles'

const WhatIsTheCompany: React.FC = () => {
  return (
    <Container>
      <div className="a"></div>
      <div className="b">

        <Text className="title" size={2.7} weight={700} >O que é a <br/><strong>Expert?</strong></Text>

        <Text className="subtitle" >
          <strong>
            O NLW é um evento com muito código, desafios, networking e um único objetivo: te levar para o próximo nível.
          </strong>
        </Text>

        <Text className="paragraph" >
          Acreditamos que programação é uma disciplina prática. Ou seja, para dominar uma tecnologia não basta apenas conhecer a teoria ou ler a documentação: você precisa colocar a mão no código.
        </Text>
        <Text className="paragraph" >
          Através do nosso método você vai aprender novas ferramentas, conhecer novas tecnologias e descobrir hacks que vão impulsionar a sua carreira.
        </Text>

      </div>
    </Container>
  )
}

export default WhatIsTheCompany
