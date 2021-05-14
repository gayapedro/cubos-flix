import "./index.css";

export default function Produto(props) {
  function handlePlus() {
    const carrinho = [...props.sacola];
    const produtoPlus = carrinho.find(item => item.nome === props.nome);
    produtoPlus.qtd += 1;
    props.setSacola(carrinho);
  }

  function handleMinus() {
    const carrinho = [...props.sacola];
    const produtoMinus = carrinho.find(item => item.nome === props.nome);
    if (produtoMinus.qtd === 1) {
      const indice = carrinho.indexOf(produtoMinus);
      carrinho.splice(indice, 1);
    } else {
      produtoMinus.qtd -= 1;
    }
    props.setSacola(carrinho);
  }

  return (
    <div className='divProduto'>
      <div className='campoEsquerdo'>
        <img src={props.imagem} alt='' />
        <div className='textoProduto'>
          <p>{props.nome}</p>
          <p>{`R$ ${String(props.valor.toFixed(2)).replace(".", ",")}`}</p>
        </div>
      </div>
      <div className='campoDireito'>
        <img onClick={handlePlus} src='plus-icon.svg' alt='Aumentar' />
        <p>{props.qtd}</p>
        <img
          onClick={handleMinus}
          src={props.qtd === 1 ? "trash-icon.svg" : "minus-icon.svg"}
          alt='Diminuir'
        />
      </div>
    </div>
  );
}
