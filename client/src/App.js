import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css';
import AdminPanel from './Components/AdminPanel';
import Quiz from './Components/Quiz';



function App() {

  const route = createBrowserRouter([
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