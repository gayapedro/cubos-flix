import "./index.css";
import Produto from "../Produto";
import { useEffect, useState } from "react";

export default function Sacola(props) {
  const [cupom, setCupom] = useState("Insira seu cupom");
  function handleCupom(e) {
    if (e.code !== "Enter" || !e.target.value) return;
    const cupomEl = document.querySelector("#cupom");
    if (
      e.target.value.toLowerCase() === "htmlnaoelinguagem" &&
      props.timerCupom > 0
    ) {
      setCupom("");
      props.setCupomAplicado(e.target.value.toLowerCase());
      cupomEl.value = "HTMLNAOELINGUAGEM";
      cupomEl.disabled = true;
    } else {
      setCupom("Cupom inválido");
    }
  }

  function handlePrice() {
    let soma = 0;
    for (const prod of props.sacola) {
      soma += prod.qtd * prod.valor;
    }
    if (cupom === "") {
      return soma * 0.9;
    } else {
      return soma;
    }
  }

  useEffect(() => {
    if (props.cupomAplicado === "htmlnaoelinguagem") {
      setCupom("");
    }
  }, [props.cupomAplicado]);

  return (
    <div className='containerSacola'>
      <aside>
        <header>
          <img src='bag-icon.svg' alt='Sacola' />
          <p>Sacola</p>
        </header>
        <main className={props.sacola.length === 0 ? "vazio" : "temItem"}>
          {props.sacola.length === 0 ? (
            <div>
              <h2>Sua sacola está vazia</h2>
              <p>Adicione filmes agora</p>
              <img src='person-illustration.svg' alt='' />
            </div>
          ) : (
            ""
          )}
          {props.sacola.map(item => {
            return (
              <Produto
                nome={item.nome}
                imagem={item.imagem}
                qtd={item.qtd}
                valor={item.valor}
                sacola={props.sacola}
                setSacola={props.setSacola}
              />
            );
          })}
        </main>
        <footer>
          <p>{cupom}</p>
          <div className='divInputCupom'>
            <input
              onKeyPress={e => handleCupom(e)}
              id='cupom'
              type='text'
              placeholder='Cupom de desconto'
            />
            <img src='coupon-icon.svg' alt='Código de Cupom' />
          </div>
          {props.sacola.length > 0 ? (
            <button>{`Confirme seus dados R$ ${String(
              handlePrice().toFixed(2)
            ).replace(".", ",")}`}</button>
          ) : (
            ""
          )}
        </footer>
      </aside>
    </div>
  );
}
