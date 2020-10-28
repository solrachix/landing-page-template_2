import React from 'react'

import API from '../../data.json'

import Header from '../../components/Header'
import WhatIsTheCompany from '../../components/WhatIsTheCompany'
// import Testimony from '../../components/Testimony'
import WhatToExpect from '../../components/WhatToExpect'
import CourseContent from '../../components/CourseContent'
import QuestionsFrequent from '../../components/QuestionsFrequent'
import Price from '../../components/Price'
import Guarantee from '../../components/Guarantee'
import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header/>

      <CourseContent courseContent={API.courseContent} />

      {/* <Testimony testimonies={API.testimonies} /> */}

      <WhatToExpect videos={API.videos} />

      <Price />

      <WhatIsTheCompany />

      <Guarantee />

      <QuestionsFrequent questionsFrequent={API.questionsFrequent} />
    </Container>
  )
}

export default Home
