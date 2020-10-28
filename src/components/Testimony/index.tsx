import React, { useState } from 'react'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { useKeenSlider } from 'keen-slider/react'

import Text from '../Text'
import { Container, Comment } from './styles'

interface Props {
  testimonies: {
    name: string;
    testimony: string;
  }[][]
}
const Testimony: React.FC<Props> = ({ testimonies }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged (s) {
      setCurrentSlide(s.details().relativeSlide)
    }
  })

  const Aspas = () => (
    <svg
      width="32"
      height="24"
      viewBox="0 0 91 74"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.0784 2.14997L24.4403 1.75457L23.8825 2.2569C17.4026 8.09221 11.9594 15.7887 7.53634 25.3145L7.5348 25.3178C3.19313 34.7591 1 43.7142 1 52.1724V72V73H2H30.3755H31.3755V72V49.9353C31.6212 37.7955 35.2379 25.8049 42.2637 13.9524L42.7637 13.109L41.9302 12.5925L25.0784 2.14997ZM71.6749 2.14997L71.0368 1.75457L70.479 2.2569C63.9991 8.09221 58.5559 15.7887 54.1328 25.3145L54.1313 25.3178C49.7896 34.7591 47.5965 43.7142 47.5965 52.1724V72V73H48.5965H76.972H77.972V72V49.9355C78.2177 37.7956 81.8344 25.8049 88.8602 13.9524L89.3602 13.109L88.5267 12.5925L71.6749 2.14997Z"
        // stroke="#202024"
        strokeWidth="2"
        fill="#f00"></path>
    </svg>
  )

  return (
    <Container>
      <div className="a">
        <Text className="title" size={2} weight={700}>
          Depoimentos de quem participou
        </Text>

        <div className="changeSlide">
          {slider && (
            <>
              <div>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    slider.prev()
                  }}
                  className={currentSlide === 0 ? 'disabled' : ''}
                ><IoIosArrowBack /></button>

                <button
                  onClick={e => {
                    e.stopPropagation()
                    slider.next()
                  }}
                  className={currentSlide === slider.details().size - 1 ? 'disabled' : ''}
                ><IoIosArrowForward/></button>

              </div>

              <div className="dots">
                {[...Array(slider.details().size).keys()].map(idx => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        slider.moveToSlideRelative(idx)
                      }}
                      className={'dot' + (currentSlide === idx ? ' active' : '')}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="b">
        <div ref={ref} className="keen-slider">

          {
            testimonies.map((a, index) => (
              <div key={index} className={`keen-slider__slide number-slide${index + 1}`}>
                {
                  a.map((testimony, indexTwo) => (
                    <>
                      <Comment key={testimony.name}>
                        <Aspas />

                        <div>
                          <Text className="title" size={1.2}>
                            {testimony.testimony}
                          </Text>

                          <Text className="name" size={1.2}>
                            {testimony.name}
                          </Text>
                        </div>
                      </Comment>
                      {indexTwo === 0 && <hr role="separator" aria-orientation="horizontal" />}
                    </>
                  ))
                }
              </div>
            ))
          }

        </div>
      </div>
    </Container>
  )
}

export default Testimony
