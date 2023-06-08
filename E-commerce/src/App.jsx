import "./App.css";
import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from 'react-router-dom'
import Layout from "./components/Layout";
import {Home} from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Route>)
)


function App() {
  return <>
    <RouterProvider router={router}/>;
  </>

  


}

export default App;
