import "./App.scss";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Kurly from './routes/Kurly';
import Ihm from './routes/Ihm';
import Job from './routes/Job';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Kurly' element={<Kurly />} />
        <Route path='/Ihm' element={<Ihm />} />
        <Route path='/Job' element={<Job />} />
      </Routes>
    </div>

  );
}

export default App;
