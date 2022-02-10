import React, { Component } from "react"
import './App.css'

class Map extends Component {

  state = {
    personagens: [
      {
        nome: "Bruno",
        filme: "Encanto"
      },
      {
        nome: "Jim Hawkins",
        filme: "Planeta do Tesouro"
      },
      {
        nome: "Pumba",
        filme: "Rei Leão"
      },
      {
        nome: "Blu",
        filme: "Rio"
      },
      {
        nome: "Miguel",
        filme: "Viva - A Vida é uma Festa"
      },
      {
        nome: "José Bezerra",
        filme: "Enrolados"
      }
    ]
  }

  render(){
    return(
      <div>
        {this.state.personagens.map((item) => (
          <div className="box">
            <h2>Personagem: {item.nome}</h2>
            <h2>Filme: {item.filme}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default Map