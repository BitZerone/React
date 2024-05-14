import './Contador.css';

function Contador() {
    var totalPessoas = 0;
    var totalHomens = 0;
    var totalMulheres = 0;

    return (
        <div className="main">
            <img src="./img/reset.png" className="reset" onClick={Resetar()} />
            <h1>Total</h1>
            <span id="totalPessoas" className="resp">{totalPessoas}</span>
            <div className="Pessoas" style={{margin: "50px 0"}}>
                <div className="divHoMu"  style={{marginRight: "100px"}}>
                    <img alt="Homem" src="./img/homem.png" style={{height: "200px"}}/>
                    <div className="divMaisMenos">
                        <img src="./img/+.jpg" className="efeito" onClick={Incrementa('H')} />
                        <img src="./img/-.jpg" className="efeito" onClick={Decrementa('H')} />
                    </div>
                </div>
                <div className="divHoMu">
                    <img alt="Mulher" src="./img/mulher.png" style={{height: "200px"}}/>
                    <div className="divMaisMenos">
                        <img src="./img/+.jpg" className="efeito" onClick={Incrementa('M')} />
                        <img src="./img/-.jpg" className="efeito" onClick={Decrementa('M')} />
                    </div>
                </div>
            </div>
            <div className="divResps">
                <div className="divHoMu" style={{marginRight: "120px"}}>
                    <h3 style={{margin: "0 auto"}}>Homens</h3>
                    <span id="homemResp" className="resp">{totalHomens}</span>
                </div>
                <div className="divHoMu" style={{marginRight: "120px"}}>
                    <h3 style={{margin: "0 auto"}}>Mulheres</h3>
                    <span id="mulherResp" className="resp">{totalMulheres}</span>
                </div>
            </div>
        </div>
    );

    function Incrementa(gen){
        if (gen === 'H') {
            totalHomens++;
        } else {
            totalMulheres++;
        }
        totalPessoas++;
    }

    function Decrementa(gen){
        if (gen === 'H') {
            totalHomens--;
        } else {
            totalMulheres--;
        }
        totalPessoas--;
    }

    function Resetar(){
        totalPessoas = 0;
        totalHomens = 0;
        totalMulheres = 0;
    }
}

export default Contador;