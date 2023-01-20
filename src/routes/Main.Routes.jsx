import { lazy } from 'react';

 
import Dashboard from '../components/Dashboard';
import Signup from '../components/Signup';
import Layout from '../layout';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path:'/',   
    element: <Layout />,
    children: [ 
        
        {
            path: '/',
            element: <Dashboard />,
        },
        {
            path: '/D',
            element: <Dashboard />,
        },
        {
            path: '/',
            element: <Dashboard />,
        },
         
         
    ]
};


export default MainRoutes