import { useState } from "react"; //Se importa la función useState

const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0); // Se llama a la función asignando el valor inicinal a 0
  console.log('renderizando con counter value', counter);

  const increaseByOne = () => {
    console.log('inrementando, valor before', counter);
    setCounter(counter +1);
  }
  const decreaseByOne = () => {
    console.log('decreciendo, valor anterior,', counter);
    setCounter(counter -1);
  }
  const setToZero = () => {
    console.log('reestableciendo a cero, valor anterior', counter);
    setCounter(0);
  }

  return (
    <div>
      <Display counter={counter} />
      <Button 
        onClick={increaseByOne}
        text='plus'
      />
      <Button 
        onClick={setToZero}
        text='zero'
      />
      <Button 
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

export default App;

/*
//Re-renderizado de la página
const App = (props) => {
  const {counter} = props;

  return(
    <div>
      {counter}
    </div>
  )
}

export default App;
*/


//Segunda Parte  FUNCIONES AUXILIARES DEL COMPONENTE

  //Destructurando
  /*const Hello = (props) => {
    //const name = props.name;
    //const age = props.age;
    const {name, age} = props;

    const bornYear = () => new Date().getFullYear() - age;
  
    return(
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()} </p>
      </div>
    )
  };*/

  //Más destructuración
  /*const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age
  
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
  
  const App = () => {
    const name = "Víctor";
    const age = 46;
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name='Bea' age='42' />
        <Hello name={name} age={age} />
      </div>
    )
  }
  
  export default App*/

/*const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  }

  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
};

const App = () => {
  const name = "Víctor";
  const age = 46;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Bea' age='42' />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App*/

/*
Primera parte
const Hello = (props) => {
  console.log(props);
  
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
};

const App = () => {
  const name = "Víctor";
  const age = 46;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Bea' age='42' />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App*/




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App