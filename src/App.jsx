import "./App.scss";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Kurly from './routes/Kurly';
import Sif from './routes/Sif';
import Book from './routes/Book';
import Ihm from './routes/Ihm';
import Job from './routes/Job';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Kurly' element={<Kurly />} />
        <Route path='/Sif' element={<Sif />} />
        <Route path='/Book' element={<Book />} />
        <Route path='/Ihm' element={<Ihm />} />
        <Route path='/Job' element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;
