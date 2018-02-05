import React from 'react';

const Person = ({ person, removeAction }) => {
  return (
    <div>
      <p>{person.name} {person.number}<button type="button" onClick={removeAction(person.id)}>poista</button></p>
    </div>
  )
}

export default Person
