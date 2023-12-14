
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Trending from './pages/Trending';
import HomePage from './components/HomePage';
import {Subscriptions} from './pages/Subscriptions'; // Fix the import statement
import RenderVideos from './components/RenderVideos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/renderVideos' element={<RenderVideos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
