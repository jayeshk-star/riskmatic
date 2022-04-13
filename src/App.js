import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useStateValue } from './utils/store';
// import { io } from 'socket.io-client';
// import { socket } from './config';
// ******************** Pages ********************
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { PrivateRoute } from './utils/route';
import Login from './pages/Login';
// import HeaderWithDrawer from './components/organism/HeaderWithDrawer'
import NotFound from './pages/NotFound/index.js';
import Screen from './utils/screen.js';

// ******************** Style ********************
import './App.css';
import User from './pages/User/index.jsx';
import SpaceManagment from './pages/SpaceManagment/index.jsx';

const App = () => {
  // const [store, dispatch] = useStateValue();
  // const [role] = useState(store.role);
  const [routes, setRoutes] = useState([]);
  // console.log(store.role);

  useEffect(() => {
    setRoutes(routeComponent('admin'));
    // const socketIO = io(`${process.env.REACT_APP_APP_URL}/report-incident`, socket.config);
    // socketIO.on('connect', () => {
    //   console.log('Socket connected successfully!!');
    // });
    // dispatch({
    //   type: 'SOCKET',
    //   socketIO: socketIO
    // });
  }, []);

  console.log(routes);

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route exact path="/" key="/" element={<Login />} />
          <Route exact path="/login" key="/login" element={<Login />} />
          <Route exact path="/home" key="/home" element={<Screen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

function routeComponent(role) {
  switch (role) {
    case 'admin':
      return admin();
    // case 'reporting':
    //   return reporting();
    // case 'incident':
    //   return incident();
    default:
      return null;
  }
}

function admin() {
  return [
    <PrivateRoute
      exact
      path="/user"
      key="/user"
      render={(props) => Screen('User', <User props={props} />)}
    />,
    <PrivateRoute
      exact
      path="/space-management"
      key="/space-management"
      render={(props) => Screen('Space Management', <SpaceManagment props={props} />)}
    />
  ];
}

export default App;
