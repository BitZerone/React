import React, { useState, useEffect } from 'react';

function Relogio() {
    var data = new Date();
    var hor = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
    var min = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
    var seg = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
    const [relogio, setRelogio] = useState(hor + ":" + min  + ":" + seg);
    const [date, setDate] = useState(data.toLocaleDateString());

    useEffect(() => {
        setInterval(() => {
            var data = new Date();
            var hor = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
            var min = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
            var seg = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
            setRelogio(hor + ":" + min  + ":" + seg);
            setDate(data.toLocaleDateString());
        }, 1000);
    }, [relogio]);


    
    
    return (
    <div className="Relogio">
        <p>{date} {relogio}</p>
    </div>
    );
}

export default Relogio;
