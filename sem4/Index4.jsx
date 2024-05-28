import React from 'react';
import { Link } from "react-router-dom";

function Index4(){
    return (
        <div className="container">
            <div>
                <div>
                    <h1>Atividades Semana 4</h1>
                </div>
            </div>
           
            <div>
                <div>
                    <Link to="./bucketlist" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Bucket List</Link>
                    <Link to="./counter" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Contador</Link>
                    <Link to="./counterlist" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista de Contadores</Link>
                    <Link to="./form" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário</Link>
                    <Link to="./form2" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário 2</Link>
                    <Link to="./form3" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário 3</Link>
                    <Link to="./gallery" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Galeria</Link>
                    <Link to="./list" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista</Link>
                    <Link to="./list2" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 2</Link>
                    <Link to="./list3" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 3</Link>
                    <Link to="./list4" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 4</Link>
                    <Link to="./movingdot" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Ponto em Movimento</Link>
                    <Link to="./shapeeditor" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Editor de Formas</Link>
                    <Link to="./toolbar" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Barra de Ferramentas</Link>

                </div>
            </div>
        </div>
    )
}

export default Index4;
