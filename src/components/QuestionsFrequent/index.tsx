import React, { useState } from 'react'

import { FiPlus, FiMinus } from 'react-icons/fi'
import Button from '../Button'
import Text from '../Text'
import { Container, Question } from './styles'

interface Props {
  questionsFrequent: {
    question: string;
    response: string;
  }[]
}

const QuestionsFrequent: React.FC<Props> = ({ questionsFrequent }) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleSelectItem = (id: number) => {
    const alreadySelected = selectedItems.findIndex(item => item === id)

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id)
      setSelectedItems(filteredItems)
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }
  return (
    <Container>
      <Text className="title" size={2.7} weight={700} >Perguntas e respostas<br/><strong>mais frequentes</strong></Text>

      {
        questionsFrequent.map((question, index) => (

          <Question key={index}
            className={selectedItems.includes(index) ? 'selected' : ''}
            onClick={() => handleSelectItem(index)}
          >
            <button>
              <Text className="span" size={1} weight={700} ><strong>{index < 10 ? `0${index}` : index}.</strong></Text>
              <Text className="question" size={1} weight={700} >{question.question}</Text>

              <div className="icon">
                { selectedItems.includes(index) ? <FiMinus size={16} /> : <FiPlus size={16} /> }
              </div>
            </button>

            <div className="response">
              {question.response}
            </div>
          </Question>
        ))
      }

      <Button>
        Quero garantir minha vaga
      </Button>
    </Container>
  )
}

export default QuestionsFrequent
