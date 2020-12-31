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
          <Route path={process.env.PUBLIC_URL + '/'} exact >
            <Redirect to={process.env.PUBLIC_URL + '/tours'} />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/birthdaytoday'} exact component={Birthday}></Route>
          <Route path={process.env.PUBLIC_URL + '/FAQS'} exact component={AccordianSet}></Route>
          <Route path={process.env.PUBLIC_URL + '/experience'} exact component={Tab}></Route>
          <Route path={process.env.PUBLIC_URL + '/reviews'} exact component={Slider}></Route>
          <Route path={process.env.PUBLIC_URL + '/tours'} exact component={Tours}></Route>
          <Route path={process.env.PUBLIC_URL + '/menu'} exact component={Menu}></Route>
        </Router>  

    </div>
    );
    
    
  }
}

export default App;
