import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}
        />
        <Route path="/bookPage/:bookId" element={ <BookPage />} />
      </Routes>
    </div>
  );
};

export default App;
