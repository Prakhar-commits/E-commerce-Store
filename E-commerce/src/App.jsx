import "./App.css";
import {CreateBrowserRouter , createRoutesFromElements , Route , RouterProvider} from 'react-router-dom'
const router = CreateBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<h1>This is the index page</h1>}></Route>)
)


function App() {
  return 
  <RouterProvider router={router}/>;

}

export default App;
