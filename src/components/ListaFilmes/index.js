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

export default function ListaFilmes({ filmes, setFilmes, busca }) {
  const [filtro, setFiltro] = useState(filtroInicial);
  function handleFiltro(novoFiltro) {
    const arrayFiltro = filtro;
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
    setFiltro(arrayFiltro);
  }

  return (
    <div className='listaFilmes'>
      <h1>Filmes</h1>
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
        {filmes.map(item => {
          if ((busca !== "" && item.title.includes(busca)) || busca === "") {
            if (filtro[0].estado) {
              return (
                <Filme
                  imagem={item.backgroundImg}
                  preco={item.price}
                  titulo={item.title}
                  nota={item.starsCount}
                  favoritado={item.isStarred}
                  filmes={filmes}
                  setFilmes={setFilmes}
                />
              );
            } else {
              const categorias = item.categories;
              const filtrosAtivos = filtro.filter(item => item.estado === true);
              for (let filtroNovo of filtrosAtivos) {
                if (categorias.includes(filtroNovo.nome)) {
                  return (
                    <Filme
                      imagem={item.backgroundImg}
                      preco={item.price}
                      titulo={item.title}
                      nota={item.starsCount}
                      favoritado={item.isStarred}
                      filmes={filmes}
                      setFilmes={setFilmes}
                    />
                  );
                } else {
                  return "";
                }
              }
            }
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
}
