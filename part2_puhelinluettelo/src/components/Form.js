import React from 'react';

const Form = (props) => {
  return (
    <div>
      <h2>Puhelinluettelo</h2>
      rajaa näytettäviä arvoja <input
        value={props.filterValue}
        onChange={props.filterAction}
      />
      <h2>Lisää uusi</h2>
      <form onSubmit={props.submitAction}>
        <div>
          nimi: <input
            value={props.nameValue}
            onChange={props.nameAction}
          />
        </div>
        <div>
          numero: <input
            value={props.numberValue}
            onChange={props.numberAction}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  )
}

export default Form
