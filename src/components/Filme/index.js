import "./index.css";

export default function Filme(props) {
  function favoritar() {
    const arrayAlterado = props.filmes.map(item => {
      if (item.title === props.titulo) {
        item.isStarred = !item.isStarred;
        return item;
      } else {
        return item;
      }
    });
    props.setFilmes(arrayAlterado);
  }

  function handleCompra() {
    const carrinho = [...props.sacola];
    const produto = carrinho.find(item => item.nome === props.titulo);
    if (produto) {
      produto.qtd += 1;
    } else {
      carrinho.push({
        nome: props.titulo,
        valor: props.preco,
        imagem: props.imagem,
        qtd: 1,
      });
    }

    console.log(carrinho);
    props.setSacola(carrinho);
  }

  return (
    <div
      className='cardFilme'
      style={{ backgroundImage: `url(${props.imagem})` }}
    >
      <div className='overlay'>
        <svg
          onClick={favoritar}
          className={props.favoritado ? "favoritar selecionado" : "favoritar"}
          width='20'
          height='18'
          viewBox='0 0 20 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z'
            stroke='white'
            stroke-opacity='0.83'
          />
        </svg>
        <div className='textoCard'>
          <p>{props.titulo}</p>
          <div className='rating'>
            <img src='golden-star.svg' alt='Classificação' />
            <p>{props.nota}</p>
          </div>
        </div>
        <div onClick={handleCompra} className='precoFilme'>
          <p>Sacola</p>
          <p>{`R$ ${String(props.preco.toFixed(2)).replace(".", ",")}`}</p>
        </div>
      </div>
    </div>
  );
}
