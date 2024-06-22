import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignIn from './components/loginComponent';
import SignUp from './components/signUpComponent';
import UserDetails from './components/userDetails';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
      <div className="App">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 bg-body rounded">
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/sign-in'}>Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/sign-in'}>Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/sign-up'}>Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/Courses'}>Courses</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success bg-white" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        {/* COMPONENTS */}
        <Routes>
          <Route path="/" element={<SignUp/>}></Route>
          {/* <Route exact path="/" element={
          <div>
            <br/>
            <h1>WELCOME TO "DETAILED ANALYSIS OF REFUGEES AND DEVELOPMENT" PLATFORM</h1>
            <Courses/>
          </div>} /> */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />}/>
          <Route path="/Courses" element={<Courses />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
