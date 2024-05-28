import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./Home";
import Index1 from "./sem1/Index1";
import Index2 from "./sem2/Index2";
import Index3 from "./sem3/Index3";
import Index4 from "./sem4/Index4";
import BucketList from './sem4/BucketList';
import Counter from './sem4/Counter';
import CounterList from './sem4/CounterList';
import Form from './sem4/Form';
import Form2 from './sem4/Form2';
import Form3 from './sem4/Form3';
import Gallery from './sem4/Gallery';
import List from './sem4/List';
import List2 from './sem4/List2';
import List3 from './sem4/List3';
import List4 from './sem4/List4';
import MovingDot from './sem4/MovingDot';
import ShapeEditor from './sem4/ShapeEditor';
import Toolbar from './sem4/Toolbar';

export default function Rotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sem1" element={<Index1 />} />
            <Route path="/sem2" element={<Index2 />} />
            <Route path="/sem3" element={<Index3 />} />
            <Route path="/sem4" element={<Index4 />} />
            <Route path="/sem4/bucketlist" element={<BucketList />} />
            <Route path="/sem4/counter" element={<Counter />} />
            <Route path="/sem4/counterlist" element={<CounterList />} />
            <Route path="/sem4/form" element={<Form />} />
            <Route path="/sem4/form2" element={<Form2 />} />
            <Route path="/sem4/form3" element={<Form3 />} />
            <Route path="/sem4/gallery" element={<Gallery />} />
            <Route path="/sem4/list" element={<List />} />
            <Route path="/sem4/list2" element={<List2 />} />
            <Route path="/sem4/list3" element={<List3 />} />   
            <Route path="/sem4/list4" element={<List4 />} />
            <Route path="/sem4/movingdot" element={<MovingDot />} />
            <Route path="/sem4/shapeeditor" element={<ShapeEditor />} />
            <Route path="/sem4/toolbar" element={<Toolbar />} />
        </Routes>
        </BrowserRouter>
    )
}
