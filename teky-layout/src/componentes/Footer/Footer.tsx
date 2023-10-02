import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
                <div className='footer__register'>
                <center>
                    <p className='register footer__text'><b>Cadastre-se e receba ofertas exclusivas</b></p>
                    <form className='register__data'>
                        <input className='register__data__input' type='text' placeholder='Digite seu nome'></input>
                        <input className='register__data__input' type='text' placeholder='Digite seu email'></input>
                        <button type='submit' className='register__data__button'> Enviar </button>
                    </form>
                </center>
            </div>
            <div className='footer__higher'>
                <a href='#'><img src='./logo_principal.svg' className='img_logo'></img></a>
                <div className='div_content'>
                    <strong>Redes Sociais</strong>
                </div>
                <div className='div_content'>
                    <strong>Antendimento</strong><br />
                    <a href='#' className='footer__link'>Fale Conosco</a>
                    <a href='#' className='footer__link'>Trocas e Devoluções</a>
                    <a href='#' className='footer__link'>Vendas na Teky</a>
                </div>
                <div className='div_content'>
                    <strong>Institucional</strong><br />
                    <a href='#' className='footer__link'>Blog</a>
                    <a href='#' className='footer__link'>Quem Somos</a>
                    <a href='#' className='footer__link'>Política de Privacidade</a>
                    <a href='#' className='footer__link'>Política de Retirada</a>
                </div>
                <div className='div_content'>
                    <strong>Fale Conosco</strong><br />
                    <a href='#' className='footer__link'>+55 (51) 4042-2076</a>
                    <a href='#' className='footer__link'>contato@teky.com.br</a>
                </div>
                <div className='div_content'>                    
                    <strong>Formas de Pagamento</strong><br />
                </div>
                <div className='div_content'>
                    <strong>Formas de Pagamento</strong>
                </div>
                <div className='div_content'>
                    <strong>Site Seguro</strong>
                </div>
            </div>
            <div className='footer__bottom'>
                <p className='footer__text'>Teky Intermediação de Negócios em Suprimentos Empresarias LTDA | 22.193.309/0001-88</p>
                <p className='footer__text'>Av. Voluntários da Pátria, 2035, sala D - Floresta, Porto Alegre - Rio Grande do Sul, 90230-011</p>
                <p className='footer__text'>Formas de Pagamento: Cartão de crédito, Boleto e Pix</p>
            </div>
        </div>
    );
  }
  
  export default Footer;
  