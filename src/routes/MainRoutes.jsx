import { createBrowserRouter } from "react-router-dom";
import HelloWorld from "../pages/HelloWorld";
import MainLayout from "../layout/MainLayout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Homepage from "../pages/home/Homepage";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Homepage></Homepage>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    },
  ]);

  export default routes
  