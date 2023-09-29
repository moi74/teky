import '../style/Header.css';
import '../style/Global.css';

import Sidebar from './Sidebar.tsx'
import { useState } from 'react';

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
      };

    return (
        <div className='navbar'>
            <div className="navbar__header">
                <div className='navbar__header__esquerda'>
                    <button onClick={toggleSidebar} className='navbar__header__menuButton'><img src='./Menu.svg'></img></button>
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
                        <a className='header__categorias__item' href='#'>Outros </a>
                    </li>
                    <li>
                        <a className='header__categorias__item' href='#'> 
                            <svg className='header__categorias__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Rolamentos</span>
                        </a>
                    </li>
                </ul>
            </div>
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>
    );
  }
  
  export default Header;
  