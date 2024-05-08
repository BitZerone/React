import './Contador.css';

function Contador() {
    return (
        <div className="main">
            <img src="img/reset.png" className="reset" onClick={Resetar()} />
            <h1>Total</h1>
            <span id="totalPessoas" className="resp">0</span>
            <div className="Pessoas" style={{margin: "50px 0"}}>
                <div className="divHoMu"  style={{marginRight: "100px"}}>
                    <img alt="Homem" src="img/homem.png" style={{height: "200px"}}/>
                    <div className="divMaisMenos">
                        <img src="img/+.jpg" className="efeito" onClick={Incrementa('H')} />
                        <img src="img/-.jpg" className="efeito" onClick={Decrementa('H')} />
                    </div>
                </div>
                <div className="divHoMu">
                    <img alt="Mulher" src="img/mulher.png" style={{height: "200px"}}/>
                    <div className="divMaisMenos">
                        <img src="img/+.jpg" className="efeito" onClick={Incrementa('M')} />
                        <img src="img/-.jpg" className="efeito" onClick={Decrementa('M')} />
                    </div>
                </div>
            </div>
            <div className="divResps">
                <div className="divHoMu" style={{marginRight: "120px"}}>
                    <h3 style={{margin: "0 auto"}}>Homens</h3>
                    <span id="homemResp" className="resp">0</span>
                </div>
                <div className="divHoMu" style={{marginRight: "120px"}}>
                    <h3 style={{margin: "0 auto"}}>Mulheres</h3>
                    <span id="mulherResp" className="resp">0</span>
                </div>
            </div>
        </div>
    );

    function Incrementa(gen){
        const genResp = gen === 'H' ? 'homemResp' : 'mulherResp';
        const totalSpan = document.getElementById('totalPessoas');
        const genValue = parseInt(document.getElementById(genResp).textContent) + 1;
        document.getElementById(genResp).textContent = genValue;
        totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
    }

    function Decrementa(gen){
        const genResp = gen === 'H' ? 'homemResp' : 'mulherResp';
        const totalSpan = document.getElementById('totalPessoas');
        const genValue = parseInt(document.getElementById(genResp).textContent) - 1;
        document.getElementById(genResp).textContent = genValue;
        totalSpan.textContent = parseInt(totalSpan.textContent) - 1;
    }

    function Resetar(){
        document.getElementById('homemResp').textContent = '0';
        document.getElementById('mulherResp').textContent = '0';
        document.getElementById('totalPessoas').textContent = '0';
    }
}

export default Contador;