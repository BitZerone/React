import React from 'react';
import Component from './Component';
import { Link } from 'react-router-dom';

function Index3() {
    return (
    <>
        <Component />
        <br />
        <Link to="/">Retoranar a página inicial</Link>
    </>
    );
}

export default Index3;