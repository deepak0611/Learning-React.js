import React from 'react';
import {Route, BrowserRouter as Router,Redirect} from 'react-router-dom';
import './App.css';
import AccordianSet from './accordian/accordianSet.js'
import Nav from './navbar/nav';
import Slider from './slider/slider';
import Tab from './tabs/tab';
import Birthday from './birthday/birthday';
import Tours from './tours/tours';
import Menu from './menu/menu';



class App extends React.Component {
  render(){
    return(
      <div>
        <Nav/>   
        
        <Router>
          <Route path='/' exact >
            <Redirect to="/tours" />
          </Route>
          <Route path='/birthdaytoday' exact component={Birthday}></Route>
          <Route path='/FAQS' exact component={AccordianSet}></Route>
          <Route path='/experience' exact component={Tab}></Route>
          <Route path='/reviews' exact component={Slider}></Route>
          <Route path='/tours' exact component={Tours}></Route>
          <Route path='/menu' exact component={Menu}></Route>
        </Router>  

    </div>
    );
    
    
  }
}

export default App;
