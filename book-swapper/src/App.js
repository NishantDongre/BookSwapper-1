import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Frontpage from './components/Frontpage';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Intro from './components/Intro';
import MainBookDisplay from './components/MainBookDisplay';
import AllBooksPage from './components/AllBooksPage';

function App() {
  return (
    <div className="backgroundImage">
      <BrowserRouter>
        {/* <Navigation /> */}
        <Switch>
          <Route exact path='/' component={Frontpage} />
          <Route exact path='/home' component={Frontpage} />
          <Route exact path='/intro' component={Intro} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/contactus' component={ContactUs} />
          <Route exact path='/bookDisplay' component={MainBookDisplay} />
          <Route exact path='/allBooks' component={AllBooksPage} />
        </Switch>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
