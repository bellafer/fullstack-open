//1.4 INFORMACIÓN DEL CURSO PARTE 5
/* 
Llevemos los cambios un paso más allá. Cambia el curso y sus partes a un solo objeto JavaScript.
Arregla todo lo que se rompa.
*/

const App = () => {
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
