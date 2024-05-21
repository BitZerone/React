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

function getImageUrl(pessoa, size = 's'){
    return (
        'https://i.imgur.com/' +
        pessoa.imageId +
        size +
        '.jpeg'
    );
}

function Pacote({enviado, nome}){
    return (
        <li>{nome} {enviado && ' ✓'}</li>
    );
}

function List(){
    const pessoas = [
        {
            id: 1,
            nome: "Cleide",
            profissao: "domadora de cavalos"
        },
        {
            id: 2,
            nome: "Jonathan",
            profissao: "pugilista",
            alcunha: "Jojo",
            imageId:'fE2Q0kS'
        },
        {
            id: 3,
            nome: "Klaiton",
            profissao: "pugilista",
            alcunha: "O bom de guerra",
            imageId: 'Mv2WRtP'
        },
        {
            id: 4,
            nome: "Carlinhos",
            profissao: "crítico gastronômico"
        }
    ];
    const pugilistas = pessoas.filter(pessoa => pessoa.profissao === "pugilista");
    const listItens = pugilistas.map(pessoa =>
        <li>
            <img 
                src={getImageUrl(pessoa)}
                alt={pessoa.nome}
            />
            <p>
                <b>{pessoa.nome}</b>
                {' ' + pessoa.profissao + ' '}
                conhecido por {pessoa.alcunha}
            </p>
        </li>
    );

    return <ul>{listItens}</ul>
}

function Cup({ guest }){
    return <h2>Chá para o convidado #{guest}</h2>;
}

function TeaGathering(){
    let cups = [];
    for (let index = 1; index <= 5; index++) {
        cups.push(<Cup key={index} guest={index}/>);
    }

    return cups;
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
            <h1>1.7</h1>
            <List />
            <h1>1.8</h1>
            <TeaGathering />
        </>
    );
}

export default Component;