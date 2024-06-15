import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {RouterProvider} from "react-router-dom";
import router from "./router";
import DefaultLayout from "./Layouts/DefaultLayout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DefaultLayout>
    <RouterProvider router={router}/>
  </DefaultLayout>
);

