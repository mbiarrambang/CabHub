import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../Sidelinks/App2'
import { ChakraProvider, theme } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
