import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css';
import AdminPanel from './Components/AdminPanel';
import Quiz from './Components/Quiz';
import SignIn from "./Components/login/SignIn";



function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>
    },
    {
      path: "/admin",
      element: <AdminPanel/>
    },
    {
      path:"/quiz",
      element:<Quiz/>
    }
  ])

  return <>
  <RouterProvider router={route}></RouterProvider>
  </>
}

export default App;