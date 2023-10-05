import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import Menu from './components/menuSider';



function App() {
  return (
      // <Routes>
      //   <Route path='/homePage' element={<HomePage />}/>
      // </Routes>
      <>
        {/* <HomePage/> */}
        <Menu/>
      </>
  );
}

export default App;
