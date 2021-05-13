import "./index.css";

export default function Sacola() {
  return (
    <div className='containerSacola'>
      <aside>
        <header>
          <img src='bag-icon.svg' alt='Sacola' />
          <p>Sacola</p>
        </header>
        <main>
          <h2>Sua sacola está vazia</h2>
          <p>Adicione filmes agora</p>
          <img src='person-illustration.svg' alt='' />
        </main>
        <footer>
          <p>Insira seu cupom</p>
          <div className='divInputCupom'>
            <input id='cupom' type='text' placeholder='Cupom de desconto' />
            <img src='coupon-icon.svg' alt='Código de Cupom' />
          </div>
        </footer>
      </aside>
    </div>
  );
}
