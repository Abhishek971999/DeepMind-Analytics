import React from 'react';
import './Global.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
