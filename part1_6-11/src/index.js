import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  asetaArvoon = (arvo) => {
    console.log(arvo);
    return () => {
      this.setState(arvo)
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>anna palautetta</h1>
          <Button
            handleClick={this.asetaArvoon({ good: this.state.good + 1} )}
            text="Hyvä"
          />
          <Button
            handleClick={this.asetaArvoon({ neutral: this.state.neutral + 1} )}
            text="Neutraali"
          />
          <Button
            handleClick={this.asetaArvoon({ bad: this.state.bad + 1} )}
            text="Huono"
          />
        </div>
        <div>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
        </div>
    </div>
    )
  }
}

const Statistics = ({ good, neutral, bad }) => {

  if ((good + neutral + bad) === 0) {
    return (
      <p>Yhtään palautetta ei ole annettu</p>
    )
  }

  const avg = ( (good * 1) + (neutral * 0) + (bad * -1) ) / (good + neutral + bad)
  const positive = good / (good + neutral + bad) * 100

  return (
    <div>
      <h1>statistiikka</h1>
      <table>
        <Statistic name='hyvä' counter={good}/>
        <Statistic name='neutraali' counter={neutral}/>
        <Statistic name='huono' counter={bad}/>
        <Statistic name='keskiarvo' counter={avg.toFixed(1)}/>
        <Statistic name='positiivisia' counter={positive.toFixed(1) + '%'}/>
      </table>
    </div>
  )
}

const Statistic = ({ name, counter }) => (
  <tr>
    <td>{name}</td>
    <td>{counter}</td>
  </tr>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'));
