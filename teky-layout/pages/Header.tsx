import '../style/Header.css';

function Header() {
    return (
        <div className='navbar'>
            <div className="header">
                <div className='direita'>
                    <a href='#'><img src='./Menu.svg'></img></a>
                    <a href="#default">
                        <img src='./tekyWhite.svg' className='logo'></img>
                    </a>
                </div>
                <div className='centro'>
                    <div className='busca'>
                        <form>
                            <select className='categoriaSelect'></select>
                            <input type='text' className='pesquisa' placeholder='Pesquisar'></input>
                            <button type='submit' className='buttonBusca'>S</button>
                        </form>
                    </div>
                    <div className='login'>
                        <p>Olá <br />
                        <a href='/' className='headerLink'>Faça seu login</a>
                        </p>
                    </div>
                </div>
                <div className="esquerda">
                    <a className="linkheader" href="#home">Quem somos</a>
                    <p> | </p>
                    <a className="linkheader" href="#contact">Teky Pro</a>
                    <p> | </p>
                    <a className="linkheader" href="#about">Venda na Teky</a>
                    <p> | </p>
                        <a className="linkheader" href='#'>Pedidos</a>
                        <a><img src='./carrinho.png' className='carrinho'></img></a>

                </div>
            </div>
            <div className='categorias'>
                <ul className='categoria'>
                    <li>
                        <a className='categoriaHeader' href='#'>Abrasivos</a>
                    </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Correias e Mangueiras</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Corte e Usinagem</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Elétrica e Telecom</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>EPIs e EPCs</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Ferramentas</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Ficação e Vedação</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Hidráulicos e Pneumáticos</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Motores e Bombas</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Óleos, Fluídos e Solventes</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Outros</a>
                        </li>
                    <li>
                        <a className='categoriaHeader' href='#'>Rolamentos</a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
  
  export default Header;
  