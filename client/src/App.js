import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css';
import AdminPanel from './Components/AdminPanel';
import Quiz from './Components/Quiz';
import Authentication from "./Components/login/Authentication.js";
import RegisterUser from "./Components/login/RegisterUser.js"


function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Authentication/>
    },
    {
      path: "/admin",
      element: <AdminPanel/>
    },
    {
      path:"/quiz",
      element:<Quiz/>
    },
    {
      path:"/register",
      element:<RegisterUser/>
    }
  ])

  return <>
  <RouterProvider router={route}></RouterProvider>
  </>
}

export default App;