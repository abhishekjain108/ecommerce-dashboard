import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';


function App() {
  return (
    <>

    <BrowserRouter>
    <Nav/>
    {/* <center className='display-4'>E-Dashboard</center> */}
    <Routes>

      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<ProductList/>} ></Route>
      <Route path='/add' element={<AddProduct/>} ></Route>
      <Route path='/logout' element={<h1>i am logout</h1>} ></Route>
      <Route path='/profile' element={<h1>i am profile</h1>} ></Route>
      </Route>
      
      <Route path='/signup' element={<SignUp/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
   
    </>
  );
}

export default App;
