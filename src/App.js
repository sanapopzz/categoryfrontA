
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Components/Category/Category';
import Login from './Components/Login/Login';
import Subcategory from './Components/Subcategory/Subcategory';

function App() {
  return (
    <div className="App">
      {/* <Category/> */}
      {/* <Subcategory/> */}
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path={'/'}element={<Login/>}></Route> */}
        <Route path={'/c'}element={<Category method='post'/>}></Route>
        {/* <Route path={'/s '}element={<Subcategory/>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
