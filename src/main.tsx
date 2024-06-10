import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Router from "./components/Router.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import History from "./pages/History.tsx";
import Friends from "./pages/Friends.tsx";

const router = createBrowserRouter([
	{
		element: <Router/>,
		children: [
			{
				path: "/",
				element: <Home/>,
			},
			{
				path: "/history",
				element: <History/>,
			},
			{
				path: "/friends",
				element: <Friends/>,
			},
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<RouterProvider router={router}/>
  </React.StrictMode>,
)
