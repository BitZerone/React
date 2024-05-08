import React from 'react';
import Relogio from './Relogio';
import Letreiro from './Letreiro';
import { Link } from 'react-router-dom';

function Index1() {
    return (
    <>
        <h1>Atividade 1</h1>
        <Relogio />
        <Letreiro />
        <br />
        <Link to="/">Retoranar a página inicial</Link>
    </>
    );
}

export default Index1;

