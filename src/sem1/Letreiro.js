import React, { useState, useEffect } from 'react';

function Letreiro() {
    const fraseCompleta = "Conheça a Fatec";
    const [fraseIncompleta, setFraseIncompleta] = useState("");
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (contador < fraseCompleta.length) {
                setFraseIncompleta(fraseIncompleta + fraseCompleta[contador]);
                setContador(contador + 1);
            } else {
                setFraseIncompleta("");
                setContador(0);
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [contador, fraseCompleta, fraseIncompleta]);

    return (
        <div className="Letreiro">
            <p>{fraseIncompleta}</p>
        </div>
    );
}

export default Letreiro;
