import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./Home";
import Index1 from "./sem1/Index1";
import Index2 from "./sem2/Index2";
import Index3 from "./sem3/Index3";

export default function Rotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sem1" element={<Index1 />} />
            <Route path="/sem2" element={<Index2 />} />
            <Route path="/sem3" element={<Index3 />} />
        </Routes>
        </BrowserRouter>
    )
}
