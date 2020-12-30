import React from "react";
import '../App.css';
import './nav.css';
import { FaBars} from 'react-icons/fa'
import { links, social } from './navData'
import logo from '../logo.svg'


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={showLinks:false};
    }


    toggle(val){
        this.setState({showLinks:val});
    }

    render(){
        const showLinks = this.state.showLinks;
        const classname = showLinks ? 'nav-links-container show-nav-container' : 'nav-links-container';
        return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img className="nav-logo" src={logo} alt="logo" ></img>
                    <button className="nav-toggle" onClick={()=>this.toggle(!showLinks)}>
                        <FaBars/>
                    </button>
                </div>
                
                <div className={classname}>
                    <ul className="nav-links">
                        {links.map((link) =>{
                            const {id,url,text} = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );                        
                        })}
                    </ul>
                </div>
                
                
                 {/* <ul className="social-icons">
                    {social.map((soc) =>{
                        const {id,url,icon} = soc;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                    
                    })}
                </ul>  */}
                 
            </div>

        </nav>
        );
    }
}

export default Nav;














