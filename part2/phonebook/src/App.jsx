import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const namesToShow = showAll ? persons : persons.filter(person => person.important === true)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button
            onClick={() => {
              if(persons.some(person => person.name === newName))
              {
                alert(`${newName} is already added to phonebook`)
              }
              else 
              {
                addPerson(newName)
              }
            }}
            type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul >
        {namesToShow.map(persons => <li key={persons.name}>{persons.name}</li>)}
      </ul>
    </div>
  )
}

export default App