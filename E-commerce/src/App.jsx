import "./App.css";
import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from 'react-router-dom'
import Layout from "./components/Layout";
import {Home} from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import {store} from "./store";
import Checkout from "./pages/Checkout";
import AuthProvider from "./firebase/Auth";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<Checkout/>}></Route>
  </Route>
    <Route path="/login" element={<Login/>}></Route>
  </>
  
  )
)


function App() {
  return (
<AuthProvider>
<Provider store={store}>
<RouterProvider router={router}/>
</Provider>   
</AuthProvider>
)
 

  


}

export default App;
