import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LogInAsStudent from './components/Files/logInAsStudent';
import Logo from './components/Files/Logo';
import ErrorPage from './components/Files/404Page';
import HomeComponent from "./HomeComponent";


const App = () => {
    return (
        <Router>
            <nav className='This_Is_Header'>
                <Logo />
                <div className='ListCollections'>
                    <ul>
                        <li><Link className='These_Is_Links' to="/">HomeComponent</Link ></li>
                        <li><Link className='These_Is_Links' to="/LogInAsStudent">LogIn As Student </Link ></li>

                        <button className='JoinNow'> Join Now </button>

                    </ul>
                </div>
            </nav>
           
            <Routes>
                <Route exact={true} path="/" element={< HomeComponent />}> </Route>
                <Route exact={true} path="/LogInAsStudent" element={< LogInAsStudent />}> </Route>
                <Route exact={true} path="*" element={< ErrorPage />}> </Route>
            </Routes>
        </Router>
    );
}
export default App;