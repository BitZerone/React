import React from 'react';
import Contador from './Contador';
import { Link } from 'react-router-dom';

function Index2() {
    return (
    <>
        <Contador />
        <br />
        <Link to="/">Retoranar a página inicial</Link>
    </>
    );
}

export default Index2;