import './CategoriesMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear} from '@fortawesome/free-solid-svg-icons';

function CategoriesMenu() {
    return <>
        <div className='categories'>
            <ul className='categories__items'>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Abrasivos</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Correias e Mangueiras</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Corte e Usinagem</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Elétrica e Telecom</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>EPIs e EPCs</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Ferramentas</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Fixação e Vedação</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Hidráulicos e Pneumáticos</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Motores e Bombas</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Óleos, Fluídos e Solventes</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Outros</span>
                    </a>
                </li>
                <li className='categories__items__category'>
                    <a>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Rolamentos</span>
                    </a>
                </li>
            </ul>
        </div>
    </>
}

export default CategoriesMenu;