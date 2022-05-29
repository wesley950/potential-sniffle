import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Provider } from "react-redux"
import store from "./redux/store"

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Provider>
    , document.getElementById('root'));
