import React from 'react';
import Gallery from "./Gallery";
import {Profile} from "./Gallery";

export function TodoList(){
    return (
        <>
            <h1>1.3</h1>
            <img
                src='https://uploads.spiritfanfiction.com/historias/capas/201608/uma-historia-totalmente-aleatoria-interativa-6353447-300820162245.jpg'
                alt='Toddy voador'
                className='toddy'
            />
            <ul>
                <li>1 list</li>
                <li>2 list</li>
                <li>3 list</li>
            </ul>
        </>
    );
}

export function Avatar({imagem = 's'}){
    const estilo = {
        width: '100px',
        margin: '10px'
    };
    var avatar = imagem;
    if (imagem === 's') {
        avatar = "https://uploads.spiritfanfiction.com/historias/capas/201608/uma-historia-totalmente-aleatoria-interativa-6353447-300820162245.jpg";
    }
    
    const desc = "Toddy voador";
    return (
        <>
            <h1>1.4 e 1.5</h1>
            <img
                src={avatar}
                alt={desc}
                className='toddy'
                style={estilo}
            />
        </>
    );
}

function Pacote({enviado, nome}){
    return (
        <li>{nome} {enviado && ' ✓'}</li>
    );
}

function Component() {
    return (
        <>
            <Gallery />
            <h1>1.2</h1>
            <Profile />
            <TodoList />
            <Avatar />
            <Avatar imagem={"https://uploads.spiritfanfiction.com/historias/capas/201608/uma-historia-totalmente-aleatoria-interativa-6353447-300820162245.jpg"}/>
            <h1>1.6</h1>
            <Pacote 
                enviado={true}
                nome="Carambola"
            />
            <Pacote 
                enviado={false}
                nome="Pepino"
            />
            <Pacote 
                enviado={true}
                nome="Mandioca"
            />
        </>
    );
}

export default Component;