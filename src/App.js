import './App.css';
import React,{useEffect}  from 'react';
import Nav from './components/Nav.js';
import Footer from'./components/Footer.js';
import FeatureProducy from './components/FeatureProducy';
import Signin from './components/Signin'
import Services from './components/Services.js'
import Products from './pages/Products.js'
import CartPage from './pages/CartPage';
import About from './pages/About.js';
import Homepage from './pages/Homepage';
import {auth} from './components/firebase'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

import DetailsProduct from './components/DetailsProduct.js';

function App() {
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>
      {
        console.log('the user is ',authUser)
        if(authUser)
        {
           
        }
        else{
          
        }
      })
  })
  return (
    <div className="App">

      <Router>
        
          <Nav/>
            <Switch>
              <Route exact path="/">
                
                <Homepage/>
                <FeatureProducy/>
                <Services/> 
              </Route>
              <Route exact path="/Signin"><Signin/></Route>
              <Route exact path="/products">
                
                  <Products/>
                
                
              </Route>
              <Route exact path='/products/:Id' children={<DetailsProduct/>}/>
                 
                 
              <Route exact path='/Cart'>
                
                  <CartPage/>
               
                </Route>
              
              <Route path="/About">
                <About/>
              </Route>
            </Switch>
          
        
          <Footer/>
        
       </Router>
    </div>
  );
}

export default App;
