import "./index.css";
import { useState } from "react";
import Filme from "../Filme";

const filtroInicial = [
  {
    nome: "todos",
    estado: true,
  },
  {
    nome: "action",
    estado: false,
  },
  {
    nome: "romance",
    estado: false,
  },
  {
    nome: "science fiction",
    estado: false,
  },
  {
    nome: "horror",
    estado: false,
  },
];

export default function ListaFilmes({
  filmes,
  setFilmes,
  busca,
  setBusca,
  sacola,
  setSacola,
}) {
  const [filtro, setFiltro] = useState(filtroInicial);

  function handleCategoria(filme) {
    const filtrosAtivos = filtro.filter(item => item.estado);
    if (filtro[0].estado) {
      return filme;
    }
    if (filtrosAtivos.some(item => filme.categories.includes(item.nome))) {
      return filme;
    } else {
      return "";
    }
  }

  function handleFiltro(novoFiltro) {
    const arrayFiltro = [...filtro];
    switch (novoFiltro) {
      case "todos":
        arrayFiltro[0].estado = true;
        arrayFiltro[1].estado = false;
        arrayFiltro[2].estado = false;
        arrayFiltro[3].estado = false;
        arrayFiltro[4].estado = false;
        break;
      case "action":
        arrayFiltro[0].estado = false;
        arrayFiltro[1].estado = !arrayFiltro[1].estado;
        break;
      case "romance":
        arrayFiltro[0].estado = false;
        arrayFiltro[2].estado = !arrayFiltro[2].estado;
        break;
      case "science fiction":
        arrayFiltro[0].estado = false;
        arrayFiltro[3].estado = !arrayFiltro[3].estado;
        break;
      case "horror":
        arrayFiltro[0].estado = false;
        arrayFiltro[4].estado = !arrayFiltro[4].estado;
        break;
      default:
        break;
    }
    if (arrayFiltro.every(item => item.estado === false))
      arrayFiltro[0].estado = true;

    setFiltro([...arrayFiltro]);
  }

  function handleClearBusca() {
    setBusca("");
  }

  return (
    <div className='listaFilmes'>
      <h1>Filmes</h1>
      {busca !== "" ? (
        <div className='exibirBusca'>
          <h2>Filtro:</h2>
          <div className='nomeBusca'>
            <p>{busca}</p>
            <button onClick={handleClearBusca}>&#215;</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className='containerBotoes'>
        <button
          className={filtro[0].estado ? "selecionado" : ""}
          onClick={() => handleFiltro("todos")}
        >
          Todos
        </button>
        <button
          className={filtro[1].estado ? "selecionado" : ""}
          onClick={() => handleFiltro("action")}
        >
          Ação
        </button>
        <button
          className={filtro[2].estado ? "selecionado" : ""}
          onClick={() => handleFiltro("romance")}
        >
          Romance
        </button>
        <button
          className={filtro[3].estado ? "selecionado" : ""}
          onClick={() => handleFiltro("science fiction")}
        >
          Ficção científica
        </button>
        <button
          className={filtro[4].estado ? "selecionado" : ""}
          onClick={() => handleFiltro("horror")}
        >
          Terror
        </button>
      </div>
      <div className='listaCards'>
        {filmes.filter(handleCategoria).map(item => {
          if ((busca !== "" && item.title.includes(busca)) || busca === "") {
            return (
              <Filme
                imagem={item.backgroundImg}
                preco={item.price}
                titulo={item.title}
                nota={item.starsCount}
                favoritado={item.isStarred}
                filmes={filmes}
                setFilmes={setFilmes}
                sacola={sacola}
                setSacola={setSacola}
              />
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
}
