import './Header.css';
import '../Global.css';

import Sidebar from '../Sidebar/Sidebar.tsx'
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
                <div className='navbar__header__left'>
                    <button onClick={toggleSidebar} className='navbar__header__menuButton'><img src='./Menu.svg'></img></button>
                    <a href="#default">
                        <img src='./tekyWhite.svg' className='logo'></img>
                    </a>
                </div>
                <div className='navbar__header__center'>
                    <div className='search'>
                        <form className='search__form'>
                            <select className='categoriesSelect'>
                                <option></option>
                                <option>abrasivo</option>
                            </select>
                            <input type='text' className='search__input' placeholder='Pesquisar'></input>
                            <button type='submit' className='search__button'>
                                <svg className='search__icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className='navbar__login'>
                        <p>Olá <br />
                        <a href='/' className='navbar__link'>Faça seu login</a><br />
                        </p>
                    </div>
                </div>
                <div className="navbar__header__right">
                    <ul className='header__list'>
                        <li><a className="navbar__link" href="#home">Quem somos</a></li><span> | </span>
                        <li><a className="navbar__link" href="#contact">Teky Pro</a></li><span> | </span>
                        <li><a className="navbar__link" href="#about">Venda na Teky</a></li><span> | </span>
                        <li><a className="navbar__link" href='#'>Pedidos</a></li>
                        <li><a><img src='./carrinho.png' className='cart'></img></a></li>
                    </ul>
                </div>
            </div>
            <div className='header__categories'>
                <ul className='header__list--categories'>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Abrasivos</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Correias e Mangueiras</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Corte e Usinagem</span></a>
                        </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Elétrica e Telecom</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>EPIs e EPCs</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Ferramentas</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Ficação e Vedação</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Hidráulicos e Pneumáticos</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Motores e Bombas</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Óleos, Fluídos e Solventes</span>
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'>
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path id="bolt-solid" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                            </svg>
                            <span>Outros</span> 
                        </a>
                    </li>
                    <li>
                        <a className='header__categories__item' href='#'> 
                            <svg className='header__categories__icon' fill='current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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
  