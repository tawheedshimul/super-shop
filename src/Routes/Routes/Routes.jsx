import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import Mens from "../../Pages/Mens/Mens/Mens";
import Contact from "../../Header/Contact/Contact";
import Women from "../../Pages/Women/Women/Women";




export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/mens',
        element: <Mens></Mens>
      },
      {
        path: '/women',
        element: <Women></Women>
      },
      {
        path: '/all',
        element: <Women></Women>
      },
      {
        path: '/kids',
        element: <Women></Women>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  }
])