import React from 'react'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = ({ kurssi }) => {
  return(
    <div>
      {kurssi.osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia= {osa.tehtavia} />)}
    </div>
  )
}

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi}  />
    </div>
  )
}
const Yhteensa = ({ kurssi }) => {
  const sum = kurssi.osat.reduce((a, b) => ({ tehtavia: a.tehtavia + b.tehtavia }));
  return(
    <p>yhteensä {sum.tehtavia} tehtävää</p>
  )
}

export default Kurssi
