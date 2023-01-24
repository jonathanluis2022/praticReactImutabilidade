import "./style.css"
import { Card } from "../Components/Card/card";
import { useState } from "react";

function Home() {

  const [primeNome, setPrimeNome] = useState('');

  const [itens, setItens] = useState([]);

  function handleAddStude() {
    const NewItens = {
      name: primeNome,

      hora: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setItens(juntarComProximo => [...juntarComProximo, NewItens])
  }


  return (
    <div className="App">

      <header>

      <h1> Lista de Presença  </h1>

      <div className="container ">
        <strong> Jonathan Luis </strong>
        <img src="https://github.com/jonathanluis2022.png" alt="foto de perfil " />
      </div>

      </header>


      <input
        type="text"
        placeholder="digite ..."
        onChange={e => setPrimeNome(e.target.value)}
      />

      <button type="button" onClick={handleAddStude}> Enviar </button>

      {
        itens.map(Iten =>
          <Card
            key={Iten.hora}
            name={Iten.name}
            hora={Iten.hora}
          />)
      }

    </div>

  )
}

export default Home;
