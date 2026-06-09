import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path= '/' element={<Home/>}/>
            <Route path= '/' element={<About/>}/>
            <Route path='*' element={<h2>Pagina não encontrada/</h2>}/>
        </Routes>
    )
}