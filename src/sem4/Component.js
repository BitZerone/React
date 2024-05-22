import { sculptureList } from './data.js'
import React, { useState } from 'react';

function Botao(){
    return (
        <button onClick={() => {alert('You click me, congratulations!!!');}}>
            Click me
        </button>
    );
}

function BotaoAlerta({mensagem, pessoa}){
    return (
        <button onClick={() => alert(mensagem)}>
            {pessoa}
        </button>
    );
}

function BarraFerramenta(){
    return (
        <div>
            <BotaoAlerta mensagem="Vasco" pessoa="Tocar o gongo"/>
            <BotaoAlerta mensagem="Flamengo" pessoa="Tocar a corneta"/>
        </div>
    );
}

function Galery() {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    let sculpture = sculptureList[index];
    return(
        <>
            <button onClick={() => setIndex(index + 1)}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'} details
            </button>
            {show && <p>{sculpture.description}</p>}
            <br />
            <img 
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}

function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 3)}>+3</button>
        </>
    );
}

function Form(){
    const [to,setTo] = useState('Alice');
    const [message,setMessage] = useState('Hello');

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}
                >
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <textarea
                placeholder='Message'
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type='submit'>Send</button>
        </form>
    );
}

function Comment(){
    return (
        <>
            <h1>2.1</h1>
            <Botao />
            <BarraFerramenta />
            <h1>2.2</h1>
            <Galery />
            <h1>2.3</h1>
            <Counter />
            <h1>2.4</h1>
            <Form />
            <h1>2.5</h1>
            
        </>
    );
}

export default Comment;