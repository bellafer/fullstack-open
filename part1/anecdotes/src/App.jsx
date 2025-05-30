import React from "react";
import { useState } from 'react'

//1.13 ANECDOTES PASO 2

/*
  Crea un botón para votar la anécdota creada.
  Los votos se almacenan en un array u objeto del estado del componente.
*/

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);

  const anecdotesLength = anecdotes.length;
  console.log(anecdotesLength);

  const [votes, setVotes] = useState(new Array(anecdotesLength).fill(0));

  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    if (maxVotes === 0) return null; // No hay votos aún
    
    const maxIndex = votes.indexOf(maxVotes);
    return {
      text: anecdotes[maxIndex],
      votes: maxVotes
    };
  };

  const mostVoted = getMostVotedAnecdote();

  const randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * anecdotesLength);
    setSelected(randomIndex)
  }

  const voteAnecdote = () => {
    //crea copia del array de los votos
    const newVotes = [...votes];

    //incrementa el voto de la frase actual
    newVotes[selected] += 1;

    //Actualiza el estado con la copia modificada.
    setVotes(newVotes);
  }


  return(
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes.</p>
      <button onClick={randomNumber} >Random</button>
      <button onClick={voteAnecdote} > Vota </button>
      
      <h2>Anecdote with most votes</h2>
      {mostVoted ? (
        <>
          <p>{mostVoted.text}</p>
          <p>Votes: {mostVoted.votes}</p>
        </>
      ) : (
        <p>No votes yet.</p>
      )}

      
    </div>
  )
  
}

export default App

//1.12 ANECDOTES, PASO 1

/*
  Crea un botón que muestre aleatoriamente una frase


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const anecdotesLength = anecdotes.length;
  console.log(anecdotesLength);

  const randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * anecdotesLength);
    setSelected(randomIndex)
  }

  //console.log(randomIndex)

  return (
    <div>
      <button onClick={randomNumber} >Random</button>
      <p>{anecdotes[selected]}</p>
    </div>
  )
}

export default App
*/
