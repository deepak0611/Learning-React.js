import React from 'react';
import {birthdayData} from './birthdayData.js';
import List from './list.js';
import './birthday.css';

class Birthaday extends React.Component{
    constructor(props){
        super(props);
        this.state={
            people:birthdayData,
        }
    }
 
    render(){
        
        return(
            <main className="birthday-main">
                <section className='birthday-container'>
                    <h3>{this.state.people.length} birthdays today</h3>
                    <br/>
                    <List people={this.state.people} />
                    <br/>
                    <button onClick={() => this.setState({people:[]})}>clear all</button>
                </section>
            </main>
        );
    }
}

export default Birthaday;