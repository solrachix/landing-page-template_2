import React from 'react'

import Text from '../Text'
import Flag from '../../assets/flag.png'
import { Container } from './styles'

interface Props {
  courseContent: {
    title: string;
    description: string;
  }[];
}
const CourseContent: React.FC<Props> = ({ courseContent }) => {
  return (
    <Container>
      <Text className="title" size={2.7} weight={700} >Conteúdo do <strong>curso</strong></Text>

      <div className="content">
        {courseContent.map((content, index) => (
          <div key={index} className="card">
            <header>
              <img src={Flag} alt=""/>
              <p><span>{index + 1}</span></p>
            </header>
            <section>
              <Text className="contentTitle" size={2} weight={700} >{content.title}</Text>

              <Text className="description" size={1} >{content.description}</Text>
            </section>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default CourseContent
