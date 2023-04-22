import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import './scss/app.scss';
import { useState } from 'react';
//40:25
function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue}/>} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/NotFound" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
