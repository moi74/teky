import '../style/Global.css';
import '../style/Footer.css';

function Footer() {
    return (
        <div className='Footer'>
                <div className='cadastro'>
                <center>
                    <p className='cadastro'><b>Cadastre-se e receba ofertas exclusivas</b></p>
                    <form className='dados_cadastro'>
                        <input type='text' placeholder='Digite seu nome'></input>
                        <input type='text' placeholder='Digite seu email'></input>
                        <button type='submit'> Enviar </button>
                    </form>
                </center>
            </div>
            <div className='superior'>
                <a href='#'><img src='./logo_principal.svg' className='img_logo'></img></a>
                <div className='div_content'>
                    <strong>Redes Sociais</strong>
                </div>
                <div className='div_content'>
                    <strong>Antendimento</strong><br />
                    <a href='#'>Fale Conosco</a>
                    <a href='#'>Trocas e Devoluções</a>
                    <a href='#'>Vendas na Teky</a>
                </div>
                <div className='div_content'>
                    <strong>Institucional</strong><br />
                    <a href='#'>Blog</a>
                    <a href='#'>Quem Somos</a>
                    <a href='#'>Política de Privacidade</a>
                    <a href='#'>Política de Retirada</a>
                </div>
                <div className='div_content'>
                    <strong>Fale Conosco</strong><br />
                    <a href='#'>+55 (51) 4042-2076</a>
                    <a href='#'>contato@teky.com.br</a>
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
            <div className='inferior'>
                <p>Teky Intermediação de Negócios em Suprimentos Empresarias LTDA | 22.193.309/0001-88</p><br />
                <p>Av. Voluntários da Pátria, 2035, sala D - Floresta, Porto Alegre - Rio Grande do Sul, 90230-011</p><br />
                <p>Formas de Pagamento: Cartão de crédito, Boleto e Pix</p>
            </div>
        </div>
    );
  }
  
  export default Footer;
  