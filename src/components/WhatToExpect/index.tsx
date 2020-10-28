import React from 'react'

import Text from '../Text'
import { Container } from './styles'

interface Props {
  videos: string[];
}
const WhatToExpect: React.FC<Props> = ({ videos }) => {
  return (
    <Container>
      <Text className="title" size={2.7} weight={700} >O que esperar do <strong>Expert?</strong></Text>

      <ul>
        {
          videos.map(video => (
            <li key={video}>
              <div>
                <div>
                  <iframe
                    src={`https://www.youtube.com/embed/${video}?showinfo=0&amp;rel=0&amp;modestbranding=0`}
                    frameBorder="0"
                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
                  <a href=https://www.youtube.com/embed/${video}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=0>
                  <img src=https://img.youtube.com/vi/${video}/hqdefault.jpg alt=Laura Beatris>
                  <span>▶</span>
                  </a>`}
                    title="Nome - Depoimento" />
                </div>
              </div>
              <div>
                <Text size={2} weight={700} >Nome</Text>
              </div>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

export default WhatToExpect
