import '../style/Header.css';
import '../style/Global.css'

function Header() {
    return (
        <div className='navbar'>
            <div className="navbar__header">
                <div className='navbar__header__esquerda'>
                    <a href='#'><img src='./Menu.svg'></img></a>
                    <a href="#default">
                        <img src='./tekyWhite.svg' className='logo'></img>
                    </a>
                </div>
                <div className='navbar__header__centro'>
                    <div className='busca'>
                        <form>
                            <select className='categoriaSelect'></select>
                            <input type='text' className='pesquisa' placeholder='Pesquisar'></input>
                            <button type='submit' className='buttonBusca'>S</button>
                        </form>
                    </div>
                    <div className='navbar__login'>
                        <p>Olá <br />
                        <a href='/' className='navbar__link'>Faça seu login</a><br />
                        </p>
                    </div>
                </div>
                <div className="navbar__header__direita">
                    <ul className='header__lista'>
                        <li><a className="navbar__link" href="#home">Quem somos</a></li><span> | </span>
                        <li><a className="navbar__link" href="#contact">Teky Pro</a></li><span> | </span>
                        <li><a className="navbar__link" href="#about">Venda na Teky</a></li><span> | </span>
                        <li><a className="navbar__link" href='#'>Pedidos</a></li>
                        <li><a><img src='./carrinho.png' className='carrinho'></img></a></li>
                    </ul>
                </div>
            </div>
            <div className='header__categorias'>
                <ul className='header__lista--categorias'>
                    <li>
                        <a className='header__categorias__item' href='#'>Abrasivos</a>
                    </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Correias e Mangueiras</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Corte e Usinagem</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Elétrica e Telecom</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>EPIs e EPCs</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Ferramentas</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Ficação e Vedação</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Hidráulicos e Pneumáticos</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Motores e Bombas</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Óleos, Fluídos e Solventes</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Outros</a>
                        </li>
                    <li>
                        <a className='header__categorias__item' href='#'>Rolamentos</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Header;
  