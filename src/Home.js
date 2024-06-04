import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/sem1">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/sem2">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/sem3">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/sem4">Atividade 4</Link>
                    </li>
                    <li>
                        <Link to="/sem5">Atividade 5</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;