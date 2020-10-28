import React, { useState } from 'react'
import { ThemeProvider } from './styles/styled-components.d'
import GlobalStyle from './styles/GlobalStyle'

import 'keen-slider/keen-slider.min.css'

import Routes from './routes/app'

import { DarkTheme } from './styles/themes'
import { Container } from './styles/App'

const App: React.FC = () => {
  const [theme] = useState(DarkTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  )
}

export default App
