import "./index.css";
import Filme from "../Filme";

export default function TopFilmes({ filmes, setFilmes }) {
  return (
    <div className='topFilmes'>
      <h1>Top Filmes</h1>
      <div className='topCards'>
        {filmes.map((item, indice) => {
          if (indice < 5) {
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
          }
        })}
      </div>
    </div>
  );
}
