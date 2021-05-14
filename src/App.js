import "./App.css";
import Header from "./components/Header";
import Cupom from "./components/Cupom";
import Sacola from "./components/Sacola";
import TopFilmes from "./components/TopFilmes";
import ListaFilmes from "./components/ListaFilmes";
import Filmes from "./data";
import { useRef, useState } from "react";

function App() {
  const [timerCupom, setTimerCupom] = useState(10 * 60);
  const [cupomAplicado, setCupomAplicado] = useState("");
  const [filmes, setFilmes] = useState(Filmes);
  const [busca, setBusca] = useState("");
  const [sacola, setSacola] = useState([]);
  return (
    <div className='App'>
      <Header setBusca={setBusca} />
      {timerCupom > 0 && cupomAplicado !== "htmlnaoelinguagem" ? (
        <Cupom
          timerCupom={timerCupom}
          setTimerCupom={setTimerCupom}
          cupomAplicado={cupomAplicado}
          setCupomAplicado={setCupomAplicado}
        />
      ) : (
        ""
      )}
      <Sacola
        sacola={sacola}
        setSacola={setSacola}
        cupomAplicado={cupomAplicado}
        setCupomAplicado={setCupomAplicado}
        timerCupom={timerCupom}
      />
      <TopFilmes
        sacola={sacola}
        setSacola={setSacola}
        filmes={filmes}
        filmes={filmes}
        setFilmes={setFilmes}
      />
      <ListaFilmes
        sacola={sacola}
        setSacola={setSacola}
        filmes={filmes}
        setFilmes={setFilmes}
        busca={busca}
      />
    </div>
  );
}

export default App;
