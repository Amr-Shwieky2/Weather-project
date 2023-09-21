import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { 
  Home,
  Forecast,
  Favorites,
  SignIn,
  Error}
  from "./pages";
  
import RootLayout from "./components/Root";
import React, { useState } from "react";
  
// {const [List, setList] = useState([]);}
const Router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children:[    
        {
        path: '/',
        element: <Home />
        // listFunction = {setList}
      },
      {
        path: '/Favorites',
        element: <Favorites />
        // ListData ={List}
      },
      {
        path: '/Forecast',
        element: <Forecast/>
      },
      {
        path: '/SignIn',
        element: <SignIn/>
      },
    ]
  }
]);

function App() {
  
  return (
    <>
    <RouterProvider router={Router}/>
  </>
  )
  
}

export default App;
