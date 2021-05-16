import "./index.css";

export default function Header({ setBusca }) {
  function handleBusca(e) {
    if (e.key !== "Enter" || e.target.value === "") return;
    setBusca(e.target.value);
    e.target.value = "";
  }

  function handleClickBusca(e) {
    const inputEl = document.querySelector("#busca");
    setBusca(inputEl.value);
    inputEl.value = "";
  }

  return (
    <header className='header'>
      <img src='logo.svg' alt='Logo Cubos Flix' />
      <div className='searchBar'>
        <input
          onKeyPress={e => handleBusca(e)}
          placeholder='Pesquise filmes...'
          type='text'
          id='busca'
        />
        <button onClick={e => handleClickBusca(e)}>
          <img src='search-icon.svg' alt='Buscar' />
        </button>
      </div>
      <a href='#' className='menu'>
        <img src='bookmark-icon.svg' alt='Favoritos' />
        <p>Favoritos</p>
      </a>
      <a href='#' className='menu'>
        <img src='promotion-icon.svg' alt='Promoções' />
        <p>Promoções</p>
      </a>
      <div className='account'>
        <p>Bem vindo, Pedro</p>
        <img src='profilepic.jpg' alt='Foto de perfil' />
      </div>
    </header>
  );
}
