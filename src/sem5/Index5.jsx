import React from 'react';
import { Link } from "react-router-dom";

function Index5(){
    return (
        <div className="container">
            <div>
                <div>
                    <h1>Semana 5</h1>
                </div>
            </div>
           
            <div>
                <div>
                    <Link to="/sem5/quiz" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Quiz</Link>
                    <Link to="/sem5/ticket" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Ticket</Link>
                    <Link to="/sem5/accordion" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Accordion</Link>

                </div>
            </div>
        </div>
    )
}

export default Index5;
