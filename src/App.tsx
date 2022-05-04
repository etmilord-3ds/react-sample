import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LOGIN_ROUTE, DASHBOARD_ROUTE } from './constants/routes';

// Notice the two different styles of importing our components here

// This first one will include this file and any of it's dependencies
// as part of this file when bundled
import Layout from './components/layouts/mainLayout';
import Home from './pages/home';
import Loading from './components/general/loading';

// These React.lazy calls will instead NOT load these files right away, and
//instead split them into different bundles that will only be loaded into the
// browser when the user attempts to navigate to them
// https://reactjs.org/docs/code-splitting.html#reactlazy
const Dashboard = React.lazy(() => import('./pages/dashboard'));
const Login = React.lazy(() => import('./pages/login'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* when we have routes that will require the browser to make a network
          request to get a new bundle, we need to provide something that will be displayed
          while that request is being made */}
          <Route
            path={DASHBOARD_ROUTE}
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path={LOGIN_ROUTE}
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
