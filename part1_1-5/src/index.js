import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // const-määrittelyt
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <h1>Hello {props.kurssi}</h1>
  )
}

const Sisalto = (props) => {
  console.log(props.osat);
  const osat = props.osat.map((osa) =>
    <Osa osa={osa} />
  );
  console.log(osat);

  return (
    <div>{osat}</div>
  );
}

const Osa = (props) => {
  return (
    <p>{props.osa.nimi} {props.osa.tehtavia}</p>
  )
}

const Yhteensa = (props) => {
  var sum = 0;
  for (var i = 0; i < props.osat.length; i++) {
    sum += props.osat[i].tehtavia;
  }
  return (
    <p>yhteensä {sum} tehtävää</p>
  )
}
//
// const App = () => {
//   const kurssi = 'Half Stack -sovelluskehitys'
//   const osa1 = 'Reactin perusteet'
//   const tehtavia1 = 10
//   const osa2 = 'Tiedonvälitys propseilla'
//   const tehtavia2 = 7
//   const osa3 = 'Komponenttien tila'
//   const tehtavia3 = 14
//
//   return (
//     <div>
//       <h1>{kurssi}</h1>
//       <p>{osa1} {tehtavia1}</p>
//       <p>{osa2} {tehtavia2}</p>
//       <p>{osa3} {tehtavia3}</p>
//       <p>yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää</p>
//     </div>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
