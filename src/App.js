
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Components/Category/Category';
import Login from './Components/Login/Login';
import Subcategory from './Components/Subcategory/Subcategory';
import Home from './Components/Home/Home';




function App() {
  return (
    <div className="App">
      {/* <Category/> */}
      {/* <Subcategory/>
      <Login/> */}
      <BrowserRouter>
      {/* <Home/> */}
      <Routes>
        <Route path={'/'}element={<Login/>}></Route>
        <Route path={'/Home'}element={<Home/>}></Route>
        <Route path='/c'element={<Category method='post'/>}/>
        <Route path={'/s'}element={<Subcategory method='post'/>}></Route>
     
      
      </Routes>
     </BrowserRouter>
     
      {/* <Home/> */}
    </div>
  );
}

export default App;