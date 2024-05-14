import './Contador.css';
import React, {useState} from 'react';
import maisImage from './img/+.jpg';
import menosImage from './img/-.jpg';
import homemImage from './img/homem.png';
import mulherImage from './img/mulher.png';
import resetImage from './img/reset.png';

function Contador() {
    const [totalPessoas, setTotalPessoas] = useState(0);
    const [totalHomens, setTotalHomens] = useState(0);
    const [totalMulheres, setTotalMulheres] = useState(0);

    return (
        <div className="main">
            <img src={resetImage} className="reset" onClick={Resetar} />
            <h1>Total</h1>
            <span id="totalPessoas" className="resp">{totalPessoas}</span>
            <div className="Pessoas" style={{margin: "50px 0"}}>
                <div className="divHoMu"  style={{marginRight: "100px"}}>
                    <img alt="Homem" src={homemImage} style={{height: "200px"}}/>
                    <div className="divMaisMenos">
                        <img src={maisImage} className="efeito" onClick={() => Incrementa('H')} />
                        <img src={menosImage} className="efeito" onClick={() => Decrementa('H')} />
                    </div>
                </div>
                <div className="divHoMu">
                    <img alt="Mulher" src={mulherImage} style={{height: "200px"}}/>
                    <div className="divMaisMenos">
                        <img src={maisImage} className="efeito" onClick={() => Incrementa('M')} />
                        <img src={menosImage} className="efeito" onClick={() => Decrementa('M')} />
                    </div>
                </div>
            </div>
            <div className="divResps">
                <div className="divHoMu" style={{marginRight: "120px"}}>
                    <h3 style={{margin: "0 auto"}}>Homens</h3>
                    <span id="homemResp" className="resp">{totalHomens}</span>
                </div>
                <div className="divHoMu">
                    <h3 style={{margin: "0 auto"}}>Mulheres</h3>
                    <span id="mulherResp" className="resp">{totalMulheres}</span>
                </div>
            </div>
        </div>
    );

    function Incrementa(gen){
        if (gen === 'H') {
            setTotalHomens(totalHomens+1);
        } else {
            setTotalMulheres(totalMulheres+1);
        }
        setTotalPessoas(totalPessoas+1);
    }

    function Decrementa(gen){
        if (gen === 'H') {
            setTotalHomens(totalHomens-1);
        } else {
            setTotalMulheres(totalMulheres-1);
        }
        setTotalPessoas(totalPessoas-1);
    }

    function Resetar(){
        setTotalHomens(0);
        setTotalMulheres(0);
        setTotalPessoas(0);
    }
}

export default Contador;