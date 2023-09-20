import '../style/header.css';

function Header() {
    return (
        <div className="header">
            <button><img src='https://teky.com.br/static/media/stripe-icons.cadbe5d5.svg'></img></button>
            <a href="#default">
                <img src='./logo_principal.svg' className='logo'></img>
            </a>
            <div className='busca'>
                <form>
                    <select className='categoriaSelect'></select>
                    <input type='text' className='pesquisa' placeholder='Faça sua Pesquisa'></input>
                    <button className='pesquisar'></button>
                </form>
            </div>
            <p>Olá</p>
            <br/><a href='/'>Faça seu login</a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
  }
  
  export default Header;
  