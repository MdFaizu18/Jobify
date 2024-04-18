import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
    HomeLayout,
    Register,
    Login,
    Error,
    DashboardLayout,
    Landing,
    AddJob,
    Admin,
    AllJobs,
    Profile,
    Stats,
    EditJob
} from './pages';
import { action as registerAction } from './pages/Register';
import {action as loginAction} from './pages/Login';
import {loader as dashboardLoader} from './pages/DashboardLayout';
import {action as addjobAction} from './pages/AddJob'
import {loader as alljobsLoader} from './pages/AllJobs';
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';
import { loader as adminLoader } from './pages/Admin';
import { action as profileAction } from './pages/Profile';
import { loader as statsLoader } from './pages/Stats';

// for enabling the dark theme 
// used to change the dark theme 
export const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
};



// for rendering the page (swtiching the page)
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: 'register',
                element: <Register />,
                action: registerAction,
            },
            {
                path: 'login',
                element: <Login />,
                action:loginAction,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                loader: dashboardLoader,
                children: [
                    {
                        index: true,
                        element:<AddJob/>,
                        action:addjobAction,
                    },
                    {
                        path: 'all-jobs',
                        element: <AllJobs />,
                        loader: alljobsLoader,
                    },
                    {
                        path: 'profile',
                        element: <Profile/>,
                        action:profileAction,
                    },
                    {
                        path: 'stats',
                        element: <Stats/>,
                        loader:statsLoader
                    },
                    {
                        path: 'admin',
                        element: <Admin/>,
                        loader:adminLoader,
                    },
                    {
                        path: 'edit-job/:id',
                        element: <EditJob />,
                        loader: editJobLoader,
                        action: editJobAction,
                    },
                    {
                        path:'delete-job/:id',
                        action:deleteJobAction,
                    }
                ]
            },
        ]
    },
]);



const App = () => {
    return <RouterProvider router={router} />
};
export default App;

