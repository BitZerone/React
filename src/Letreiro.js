import { useState } from 'react';



function Letreiro() {
    const fraseCompleta = "Conheça a Fatec";
    const [fraseIncompleta, setFraseIncompleta] = useState("");
    const [contador, setContador] = useState(0);
        if(fraseCompleta[contador] != null){
            setFraseIncompleta(fraseIncompleta + fraseCompleta[contador]);
            setContador(contador + 1);
        } else {
            setFraseIncompleta("");
            setContador(0);
        }
        return (
            <div className="Letreiro">
                <p>{fraseIncompleta}</p>
            </div>
        );

}

export default Letreiro;
