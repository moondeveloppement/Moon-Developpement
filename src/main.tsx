import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx';

const router = createBrowserRouter([
  {
   element: <App />,
   children: [
     {
       path: "/",
       element: <HomePage />,
     },
    ]
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
