import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import componentIcon from '../src/assets/Components.jpg'
import propsIcon from '../src/assets/props.png'
import stateIcon from '../src/assets/state.png'
import jsx from '../src/assets/jsx.png'

function App() {
   
  const data = [
    {
      name : 'Component',
      description : 'Component is a reusable piece of code that can be used to build other components',
      image : componentIcon
    },
    {
      name : "Props",
      description : 'Props are arguments passed into React components',
      image : propsIcon
    }
    ,
    {
      name : 'State',
      description : 'State is a built-in React object that contains dynamic data',
      image : stateIcon
    },
    {
      name : 'JSX',
      description : 'JSX is a syntax extension for JavaScript and comes with the full power of JavaScript',
      image : jsx
    }
  ]
  return (
    <div className='app' style={{backgroundColor : '#160231'}}>
            <Header/>
            <CoreConcept  concept={data}/>
    </div>
  )
}

export default App
