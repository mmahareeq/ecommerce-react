import './App.css';
import React,{useEffect}  from 'react';
import Nav from './components/Nav.js';
import Footer from'./components/Footer.js';
import FeatureProducy from './components/FeatureProducy';

import Services from './components/Services.js'
import Products from './pages/Products.js'
import CartPage from './pages/CartPage';
import About from './pages/About.js';
import Homepage from './pages/Homepage';

import {BrowserRouter as Router ,Switch,Route,Redirect} from 'react-router-dom';

import DetailsProduct from './components/DetailsProduct.js';

function App() {
  
  return (
    <div className="App">

      <Router>
        
          <Nav/>
            <Switch>
              <Route exact path="/home">
                
                <Homepage/>
                <FeatureProducy />
                <Services/> 
              </Route>
              
              <Route  path="/products">
                
                  <Products/>
                
                
              </Route>
              <Route  path='/products/:Id' children={<DetailsProduct/>}/>
                 
                 
              <Route  path='/Cart'>
                
                  <CartPage/>
               
                </Route>
              
              <Route path="/about">
                <About/>
              </Route>
              <Redirect from='/' to='/home'/>
            </Switch>
          
        
          <Footer/>
        
       </Router>
    </div>
  );
}

export default App;
