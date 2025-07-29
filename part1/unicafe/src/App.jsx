//1.11 Paso 6
/*
  Mostrar los resultados en una tabla
*/

import React from "react";
//import ReactDom from "react-dom/client"
import {useState} from "react"

const StaticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
  const total =  props.good + props.neutral + props.bad;
  const positivePercentage = total > 0 ? (props.good / total) * 100 : 0;
  const averageScore = total > 0 ? (props.good - props.bad) / total : 0;

  if (total === 0)
  {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else
  {
    return(
      <div>
        <h3>Statistics</h3>
        <table>
          <tbody>
            <StaticLine text="Good" value={props.good} />
            <StaticLine text="Neutral" value={props.neutral} />
            <StaticLine text="Bad" value={props.bad} />
            <StaticLine text="Total" value={total}/>
            <StaticLine text="Positive Percen" value={positivePercentage} />
            <StaticLine text="Average Score" value={averageScore} />
          </tbody>
        </table>
        
      </div>
    )
  }

}

const Button = ({handleClick, text}) =>(
  <button onClick={handleClick} >{text}</button>
  )

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  
  return(
    <div>
      <h2>Give Feedback, please.</h2>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}
export default App;

//1.10

/*
  Extraer los botones a un componente
  Mostrar solo una estadística, por ejemplo, puntuación media.

import React from "react";
//import ReactDom from "react-dom/client"
import {useState} from "react"

const StaticLine = ({text, value}) => (
  <p>{text}: {value}</p>
)

const Statistics = (props) => {
  const total =  props.good + props.neutral + props.bad;
  const positivePercentage = total > 0 ? (props.good / total) * 100 : 0;
  const averageScore = total > 0 ? (props.good - props.bad) / total : 0;

  if (total === 0)
  {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else
  {
    return(
      <div>
        <h3>Statistics</h3>
        <StaticLine text="good" value={props.good} />
        <StaticLine text="neutral" value={props.neutral} />
        <StaticLine text="bad" value={props.bad} />
        <StaticLine text="total" value={total}/>
        <StaticLine text="Positive Percentage" value={positivePercentage} />
        <StaticLine text="Average Score" value={averageScore} />
      </div>
    )
  }

}

const Button = ({handleClick, text}) =>(
  <button onClick={handleClick} >{text}</button>
  )

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  
  return(
    <div>
      <h2>Give Feedback, please.</h2>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />

      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}
export default App;
*/


//1.8 1.9 UNICAFE, PASO 3

/*
  Refactoriza la aplicación para que la visualización de las estadísticas se extraiga en su
  propio componente.

import React from "react";
//import ReactDom from "react-dom/client"
import {useState} from "react"

const Statistics = (props) => {
  const total =  props.good + props.neutral + props.bad;
  const averageScore = total > 0 ? (props.good * 1 + props.bad * -1) / total : 0;
  const positivePercentage = total > 0 ? (props.good / total) * 100 : 0;

  if (total === 0)
  {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else
  {
    return(
      <div>
        <h3>Statistics</h3>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>Total: {total}</p>
        <p>Average Score: {averageScore}</p>
        <p>Positive Feedback: {positivePercentage}</p>
      </div>
    )
  }

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  
  return(
    <div>
      <h2>Give Feedback, please.</h2>
      <button onClick={handleGoodClick} > Good </button>
      <button onClick={handleNeutralClick} > Neutral </button>
      <button onClick={handleBadClick} > Bad </button>

      <Statistics good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}
export default App;*/

//1.7 UNICAFE, PASO 2

/*
  Mostrar nº total de comentarios recopilados
  Puntiación promedio (good:1, neutral: 0, bad: -1)
  Porcentaje de comentarios positivos


import React from "react";
//import ReactDom from "react-dom/client"
import {useState} from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad +1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
  }

  const avarageScore = total > 0 ? (good * 1 + bad * -1) / total : 0;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;
  
  return(
    <div>
      <h2>Give Feedback, please.</h2>
      <button onClick={handleGoodClick} > Good </button>
      <button onClick={handleNeutralClick} > Neutral </button>
      <button onClick={handleBadClick} > Bad </button>

      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Avarage Score: {avarageScore}</p>
      <p>Positive feedback: {positivePercentage}%</p>
      
    </div>
  )
}


export default App;*/



//1.6 UNICAFE, PASO 1
/* 
  Implemetar comentarios. 3 botones. Mostrar nº total en cada categoría. 
  Al recargar la página, desaparecen los comentarios.
*/

/*import React from "react";
//import ReactDom from "react-dom/client"
import {useState} from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad +1
    setBad(updatedBad)
  }
  
  return(
    <div>
      <h2>Give Feedback, please.</h2>
      <button onClick={handleGoodClick} > Good </button>
      <button onClick={handleNeutralClick} > Neutral </button>
      <button onClick={handleBadClick} > Bad </button>

      <h3>Statistics</h3>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      
    </div>
  )
}
export default App;*/


//1.5 INFORMACIÓN DEL CURSO PARTE 5
/* 
Llevemos los cambios un paso más allá. Cambia el curso y sus partes a un solo objeto JavaScript.
Arregla todo lo que se rompa.
*/

/*const App = () => {
  const course = {
    name: 'Half Stack application development by Bellafer 1.5',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name}, exercises: {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name}, exercises: {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name}, exercises: {course.parts[2].exercises}
      </p>
      <p>Total: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

export default App;
*/

//1.4 INFORMACIÓN DEL CURSO PARTE 4
/* 
Coloca los objetos en un array. 
Modifica las definiciones de las variables de App de la siguiente forma y modifica las otras 
partes de la aplicación que sean necesarias para que continue funcionando
Nota: en este punto puedes asumir que siempre hay tres elementos,
por lo que no es necesario pasar por los arrays usando bucles.

Sin embargo, no pases diferentes objetos como props separados del componente App a los 
componentes Content y Total. En su lugar, pásalos directamente como un array


const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({contenido}) => {
  console.log(contenido);

  return(
    <div>
      {contenido.map( (part, index) => (
        <p key={index}>
          {part.name}: {part.exercises}
        </p>
      )
      )}
    </div>
  )
}

const Total = ({sumando}) => {
  console.log(sumando);
  const total = sumando.reduce((sum, parte) => sum + parte.exercises, 0);

  return <p>Total: {total}</p>
}



const App = () => {
  const course = 'Half Stack application development by Bellafer 1.4';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  console.log(parts);
  //console.log(parts[0].exercises);

  return (
    <div>
      <Header course = {course} />
      <Content contenido={parts} />
      <Total sumando={parts}/>
    </div>
  )
}

export default App;

*/


// 1.3 INFORMACIÓN DEL CURSO PARTE 3
/*Avancemos para usar objetos en nuestra aplicación. 
Modifica las definiciones de las variables del componente App de la siguiente manera y 
también refactoriza la aplicación para que siga funcionando

const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }

  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }

  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )

}

export default App;*/


/*const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = () => {
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );


}

/*const Content = (props) => {
  console.log(props);
  
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}*/

/*const Content = (props) => {
  console.log(props);
  
  return (
    <div>
      <Part />
    </div>
  )
  }

const Total = (props) => {
  console.log(props);

  return (
    <div>
      <p>Number of exercises {props.exercises1} + {props.exercises2} + {props.exercises3}</p>
    </div>
  )
}

const App = () => {
  
  /*
  const total = [{content[0].exercises} + {content[1].exercises} + {content[2].exercises}]*/
  /*const course = 'Half Stack application development';

  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course = {course} />
      <Content />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}
export default App*/


/*const Header = () => {
  return (
    <div>
      <h1>Half Stack application development by Bellafer</h1>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App*/

/*const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
export default App*/

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
