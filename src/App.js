import './styles/app.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Welcome from './welcome';

function App(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Welcome />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;