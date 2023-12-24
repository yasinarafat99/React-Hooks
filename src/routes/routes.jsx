import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
// import Login from "../pages/Registation/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Log from "../pages/Registation/Login/Log";
// import SignUp from '../pages/Registation/Login/SignUp';
import Users from "../pages/Users/Users";
import UserDetails from "../components/UserDetails/UserDetails";
import SignIn from "../pages/Registation/Signup/SignIn";
import SignUp from "../pages/Registation/Signup/SignUp";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
               path:'/log',
               element:<Log />
            },
            {
                path:'/users',
                element:<Users />,
                loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
                // errorElement:<NotFound/>
            },
            {
                path:'userDetails/:userId',
                element:<UserDetails />,
                loader:({params}) => 
                    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
                
            }
        ]
    },
    {
        path:'/signin',
        element:<SignIn/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    // {
    //     path:"/login",
    //     element:<Login />
    // },
    // {
    //     path:"/signup",
    //     element:<SignUp />
    // },
    {
        path:"*",
        element:<NotFound />
    }
]);
export default routes;