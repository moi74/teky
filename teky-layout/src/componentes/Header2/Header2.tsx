import  './Header2.scss';
import { useState } from 'react';
import Sidebar from "../Sidebar/Sidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';


function Header2() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return <>
        <div className='header'>
            <div className='header__menu'>
                <button className='imageButton' onClick={toggleSidebar}>
                    <FontAwesomeIcon className='header__menu__bars' icon={faBars} />
                </button>
                <a href='#'>
                    <svg id="Logo_Padrao_Mono" fill='current' data-name="Logo Padrao Mono" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295 131.669">
                        <g id="Grupo_2" data-name="Grupo 2" transform="translate(237.655 23.663)">
                            <path id="Caminho_5" data-name="Caminho 5" d="M268.969,78.1a11.263,11.263,0,0,1,4.289-8.846,29.67,29.67,0,0,0-6.212-10.972,11.282,11.282,0,0,1-15.531-9.175,29.7,29.7,0,0,0-13.254,0,11.284,11.284,0,0,1-15.533,9.179,29.638,29.638,0,0,0-6.217,10.966,11.27,11.27,0,0,1,.027,17.685,29.681,29.681,0,0,0,6.191,10.91,11.286,11.286,0,0,1,15.532,9.175,29.645,29.645,0,0,0,13.254,0,11.286,11.286,0,0,1,15.532-9.179,29.67,29.67,0,0,0,6.2-10.9A11.262,11.262,0,0,1,268.969,78.1ZM246.4,90.7V84.187a6.109,6.109,0,0,1-3.03,0V90.7A12.726,12.726,0,0,1,232.254,79.58h6.512a6.106,6.106,0,0,1,0-3.03h-6.512a12.726,12.726,0,0,1,11.119-11.119v6.512a6.108,6.108,0,0,1,3.03,0V65.431A12.726,12.726,0,0,1,257.522,76.55H251.01a6.108,6.108,0,0,1,0,3.03h6.512A12.726,12.726,0,0,1,246.4,90.7Z" transform="translate(-216.511 -48.358)" fill="#ffffff"/>
                        </g>
                        <path id="Caminho_6" data-name="Caminho 6" d="M141.732,78.857l15.344-30.689h19.917L157.385,87.043l22.225,45.925H159.769L141.732,95.09Z" transform="translate(0.759 -24.747)" fill="#ffffff"/>
                        <path id="Caminho_7" data-name="Caminho 7" d="M206.3,48.189,195.482,88.772,184.66,48.189h-6.313l-8.822,17.645,16.037,60.139-8.117,30.437h19.841L226.144,48.189Z" transform="translate(8.335 -24.741)" fill="#ffffff"/>
                        <path id="Caminho_8" data-name="Caminho 8" d="M71.149,137.985V119.948H58.623v-50.5H71.149V53.212H58.623V29.764H38.861V53.212h-9.1V69.445h9.1v58.047c0,7.053,3.441,10.493,10.664,10.493Zm48.8-50.4H103.715V69.445h16.233Zm52.307-57.823h-19.84V137.985h19.84ZM139.8,83.874V63.7c0-7.053-3.613-10.493-10.836-10.493H94.711c-7.4,0-10.838,3.44-10.838,10.493v63.788c0,7.053,3.441,10.493,10.838,10.493H128.96c7.223,0,10.836-3.44,10.836-10.493V114.537H124.457l-2.706,5.411H103.715V101.833l25.588.071c7.053,0,10.493-3.613,10.493-10.837Zm-19.848,3.713H103.715V69.445h16.233ZM139.8,83.874V63.7c0-7.053-3.613-10.493-10.836-10.493H94.711c-7.4,0-10.838,3.44-10.838,10.493v63.788c0,7.053,3.441,10.493,10.838,10.493H128.96c7.223,0,10.836-3.44,10.836-10.493V114.537H124.457l-2.706,5.411H103.715V101.833l25.588.071c7.053,0,10.493-3.613,10.493-10.837Z" transform="translate(-29.764 -29.764)" fill="#ffffff"/>
                    </svg>
                </a>
            </div>
            <div className='header__search'>
                <div className='header__search__form'>
                    <select></select>
                    <input type='text' placeholder='Pesquisar'></input>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className='header__login'>
                    <p>Olá<br />
                    <a>Faça seu login</a></p>
                </div>
            </div>
            <div className='header__teky'>
                <ul>
                    <li><a>Quem somos</a></li>
                    <li>|</li>
                    <li><a>Teky Pro</a></li>
                    <li>|</li>
                    <li><a>Venda na Teky</a></li>
                </ul>
            </div>
            <div className='header__shopping'>
                <a className='header__shopping--text'>Pedidos</a>
                <a className='account'>
                    <FontAwesomeIcon icon={faUserCircle} className='header__shopping__Icon' />
                </a>
                <a href='#'>
                    <FontAwesomeIcon icon={faShoppingCart} className='header__shopping__Icon' />
                </a>
            </div>
        </div>

        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
}

export default Header2;