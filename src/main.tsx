import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'

// import des pages
import App from './App.tsx'
import HomePage from './pages/HomePage/HomePage.tsx';
import AnxieteRoot from './components/AnxieteRoot/AnxieteRoot.tsx';

const router = createBrowserRouter([
  {
   element: <App />,
   children: [
     {
       path: "/",
       element: <HomePage />,
     },
     {
       path: "/anxiete",
       element: <AnxieteRoot />,
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
