import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import ResetPass from "../Pages/ResetPass/ResetPass";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import ThankYouPage from "../Pages/ThankYouPage/ThankYouPage";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://assignment-11-server-phi.vercel.app/services')

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-phi.vercel.app/services/${params.id}`)
            },

            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },



            {
                path: '/thank-you',
                element: <ThankYouPage></ThankYouPage>
            },

            {
                path: '/profile',
                element: <Profile></Profile>
            },


            {
                path: '/reset-password',
                element: <ResetPass></ResetPass>
            }
        ]
    }
])