import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './ErrorPage'
import HistoryAll from './HistoryAll'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/history-all",
    element: <HistoryAll />,
    errorElement: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
