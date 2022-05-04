import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LOGIN_ROUTE, DASHBOARD_ROUTE } from './constants/routes';

// Notice the two different styles of importing our components here

// This first one will include this file and any of it's dependencies
// as part of this file when bundled
import Layout from './components/layouts/mainLayout';

// These React.lazy calls will instead NOT load these files right away, and
//instead split them into different bundles that will only be loaded into the
// browser when the user attempts to navigate to them
// https://reactjs.org/docs/code-splitting.html#reactlazy
const Home = React.lazy(() => import('./pages/home'));
const Dashboard = React.lazy(() => import('./pages/dashboard'));
const Login = React.lazy(() => import('./pages/login'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
