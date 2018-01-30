import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf,0),
      max: undefined,
    }
  }

  setSelected = () => {
    return () => {
      const rnd = Math.floor(Math.random() * anecdotes.length)
      console.log(rnd);
      this.setState({ selected: rnd });
    }
  }

  upvote = () => {
    return () => {
      this.state.selected
      const copy = [...this.state.points];
      copy[this.state.selected] += 1;
      console.log(copy);
      var i = copy.indexOf(Math.max(...copy));
      this.setState({ max: i })
      console.log(i);
      this.setState({ points: copy });
    }
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {this.state.points[this.state.selected]} votes</p>
        <Button
          handleClick={this.setSelected()}
          text="next anecdote"
        />
        <Button
          handleClick={this.upvote()}
          text="upvote"
        />
        <h1>anecdote with most votes</h1>
        <p>{this.props.anecdotes[this.state.max]}</p>
        <p>has {this.state.points[this.state.max]} votes</p>
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
