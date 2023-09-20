import '../style/Global.css'
import '../style/Cadastro.css'

function CadastroForm(){
    return (
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
    );
}

export default CadastroForm;