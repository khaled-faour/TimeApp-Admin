import React from 'react';
import { SuspenseWithPerf, AuthCheck } from 'reactfire';
import Signup from './Components/Authentication/Signup';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignIn from './Components/Authentication/Signin';
import Dashboard from './Components/Dashboard/Dashboard'
import CustomCircularProgress from './Components/CustomCircularProgress'
// 

function App() {



  return (
    <div className="App">
      <SuspenseWithPerf
        fallback={<CustomCircularProgress />}
      >

        <Router>
          <Route exact path='/' >
            <AuthCheck fallback={<SignIn />}>

              <Redirect to="/dashboard" />

            </AuthCheck>
          </Route>
          <Route exact path='/signup'>
            <AuthCheck fallback={<Signup />}>
              <Redirect to="/dashboard" />
            </AuthCheck>
          </Route>

          <Route path='/dashboard/:page?'>
            <AuthCheck fallback={<SignIn />}>
              <Dashboard />
            </AuthCheck>
          </Route>



        </Router>

      </SuspenseWithPerf>
    </div >
  );
}

export default App;
