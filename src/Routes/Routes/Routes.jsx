import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main/Main";
import Mens from "../../Pages/Mens/Mens/Mens";
import Contact from "../../Header/Contact/Contact";
import Women from "../../Pages/Women/Women/Women";
import ShoppingCart from "../../Pages/Cart/Cart";
import LoginForm from "../../Registration/LogInForm/R/Login";
import All from "../../Pages/All/All/All";
import ProductFolder from "../../Pages/Women/Women/ProductFolder/ProductFolder";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import SignUpForm from "../../Registration/SIgnUpForm/SignUpForm";




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
        path: '/cart',
        element: <ShoppingCart></ShoppingCart>
      },
      {
        path: '/women',
        element: <Women></Women>
      },
      {
        path: '/all',
        element: <All></All>
      },
      {
        path: '/kids',
        element: <Women></Women>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <LoginForm></LoginForm>
      },
      {
        path: '/signup',
        element: <SignUpForm></SignUpForm>
      },
      {
        path: "/file/:fileId?",
        element: <ProductFolder></ProductFolder>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>
      },
    ]
  }
])