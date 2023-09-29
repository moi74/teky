import './Sidebar.css'

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
    const sidebarClass = isOpen ? 'sidebar--open' : 'sidebar';

    return (
        <>
            <div className={`sidebar ${sidebarClass}`}>
                <ul className='sidebar__listaOrdenada'>
                    <li><a href='#'>Conta</a></li>
                    <li><a href='#'>Pedidos</a></li>
                </ul>
                <hr className='sidebar__linhasDivisoria' />

                <h3>Comprar por Categorias</h3>
                <ul className='sidebar__listaOrdenada'>
                    <li>
                        <a className='' href='#'>Abrasivos</a>
                    </li>
                    <li>
                        <a className='' href='#'>Correias e Mangueiras</a>
                        </li>
                    <li>
                        <a className='' href='#'>Corte e Usinagem</a>
                        </li>
                    <li>
                        <a className='' href='#'>Elétrica e Telecom</a>
                        </li>
                    <li>
                        <a className='' href='#'>EPIs e EPCs</a>
                        </li>
                    <li>
                        <a className='' href='#'>Ferramentas</a>
                        </li>
                    <li>
                        <a className='' href='#'>Ficação e Vedação</a>
                        </li>
                    <li>
                        <a className='' href='#'>Hidráulicos e Pneumáticos</a>
                        </li>
                    <li>
                        <a className='' href='#'>Motores e Bombas</a>
                        </li>
                    <li>
                        <a className='' href='#'>Óleos, Fluídos e Solventes</a>
                        </li>
                    <li>
                        <a className='' href='#'>Outros</a>
                        </li>
                    <li>
                        <a className='' href='#'>Rolamentos</a>
                    </li>
                </ul>

                <hr />
                <ul>
                    <li><a href='#'>Quem somos</a></li>
                    <li><a href='#'>Teky Pro</a></li>
                    <li><a href='#'>Venda na Teky</a></li>
                </ul>

                <hr />
                <h3>Ajuda e Configurações</h3>
                <ul>
                    <li><a href='#'>Sua conta</a></li>
                    <li><a href='#'>Trocas e Devoluções</a></li>
                </ul>
            </div>
            {isOpen && <div className="overlay" onClick={onClose} />} {/* Mostra a sobreposição quando a sidebar está aberta */}
        </>
    );

}

export default Sidebar;