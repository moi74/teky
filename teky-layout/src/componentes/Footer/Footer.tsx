
import './Footer.scss'

function Footer2() {
    return <>
        <div className='footer'>
            <div className='footer__register'>
                <h2>Cadastre-se e receba ofertas exclusivas</h2>
                <form className='footer__register__form'>
                    <input type='text' placeholder='Digite seu nome'></input>
                    <input type='text' placeholder='Digite seu email'></input>
                    <button type='submit'> Enviar </button>
                </form>
            </div>
            <div className='footer__higher'>
                <a href='#'><img src='./logo_principal.svg' className='imgLogo'></img></a>
                <div className='footer__higher__contents'>
                    <h4>Redes Sociais</h4>
                </div>
                <div className='footer__higher__contents'>
                    <h4>Antendimento</h4>
                    <a href='#' className='footerLink'>Fale Conosco</a><br />
                    <a href='#' className='footerLink'>Trocas e Devoluções</a><br />
                    <a href='#' className='footerLink'>Vendas na Teky</a><br />
                </div>
                <div className='footer__higher__contents'>
                    <h4>Institucional</h4>
                    <a href='#' className='footerLink'>Blog</a><br />
                    <a href='#' className='footerLink'>Quem Somos</a><br />
                    <a href='#' className='footerLink'>Política de Privacidade</a><br />
                    <a href='#' className='footerLink'>Política de Retirada</a><br />
                </div>
                <div className='footer__higher__contents'>
                    <h4>Fale Conosco</h4>
                    <a href='#' className='footerLink'>+55 (51) 4042-2076</a><br />
                    <a href='#' className='footerLink'>contato@teky.com.br</a><br />
                </div>
                <div className='footer__higher__contents'>
                    <h4>Formas de Pagamento</h4>
                </div>
                <div className='footer__higher__contents'>
                    <h4>Site Seguro</h4>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>Teky Intermediação de Negócios em Suprimentos Empresarias LTDA | 22.193.309/0001-88</p>
                <p>Av. Voluntários da Pátria, 2035, sala D - Floresta, Porto Alegre - Rio Grande do Sul, 90230-011</p>
                <p>Formas de Pagamento: Cartão de crédito, Boleto e Pix</p>
            </div>
        </div>
    </>
}

export default Footer2;