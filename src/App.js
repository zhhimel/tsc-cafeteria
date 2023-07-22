import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main'
import Home from './Home/Home'
import Login from './login-register/Login'
import Cart from './Cart/Cart'
import Categories from './Categories/Categories'
import Register from './login-register/Register';
import Allfoods from './Categories/Allfoods/Allfoods';
import Breakfast from './Categories/Breakfast/Breakfast';
import Breakfastfoods from './Categories/Breakfast/Breakfastfoods';
import { MyContextProvider } from './MyContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {

        path: "/Home",
        element: <Home></Home>,
      },
      {
        path: "categories",
        element: <Categories></Categories>,
        children: [{}]
      },
      {
        path: "Login",
        element: <Login></Login>,
        children: [
          {

          }
        ]
      },
      {
        path: "Register",
        element: <Register></Register>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "breakfastfoods",
        element: <Breakfastfoods></Breakfastfoods>
      },
      {
        path: "launch",
        element: <Breakfastfoods></Breakfastfoods>
      },
      {
        path: "dinner",
        element: <Breakfastfoods></Breakfastfoods>
      },
      {
        path: "snacks",
        element: <Breakfastfoods></Breakfastfoods>
      },
      {
        path: "allfoods",
        element: <Allfoods></Allfoods>
      }
    ]
  }
])
const App = () => {
   
  return (
    <MyContextProvider >
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </MyContextProvider>
  )
}

export default App
