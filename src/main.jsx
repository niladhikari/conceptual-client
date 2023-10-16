import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PostUser from './components/PostUser';
import DisplayUser from './components/DisplayUser';
import UpdateData from './components/UpdateData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>,
  },
  {
    path: "/users",
    element: <DisplayUser></DisplayUser>,
    loader:()=> fetch(`http://localhost:5000/users`)
  },
  {
    path: "/users",
    element: <DisplayUser></DisplayUser>,
    loader:()=> fetch(`http://localhost:5000/users`)
  },
  {
    path: "/users/:id",
    element: <UpdateData></UpdateData>,
    loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
