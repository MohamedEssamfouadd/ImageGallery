/* eslint-disable no-unused-vars */
import React from 'react'
import {createBrowserRouter,RouterProvider,Link,} from "react-router-dom";
import Gallery from './components/Gallery';



const App = () => {
  const routing=createBrowserRouter([
    {path:"",element:<Gallery/>}
  ])

  return (
    <>
     <RouterProvider router={routing}/>
    </>
  )
}

export default App
