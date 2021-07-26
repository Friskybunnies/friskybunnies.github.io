import React from 'react';
import '../src/Components/fontAwesomeIcons';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Navigation, Footer, Home, Code, Resume, Design, Writing, Performance, Contact } from './Components';
import './App.css';

function App() {
  return(
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/home' exact>
            <Redirect to='/' />
          </Route>
          {/* <Route path='/code' exact component={() => <Code />} /> */}
          <Route path='/resume' exact component={() => <Resume />} />
          <Route path='/design' exact component={() => <Design />} />
          <Route path='/writing' exact component={() => <Writing />} />
          <Route path='/performance' exact component={() => <Performance />} />
          <Route path='/contact' exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
