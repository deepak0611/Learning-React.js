import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
import './tab.css';
import {tabData} from './tabData.js';

class Tab extends React.Component{
    constructor(){
        super();
        this.state={
            value:0,
        };
    }

    render(){
        const {title,dates,duties,company} =tabData[this.state.value];
        return(
            <section className='tab-section'>
            <div className='tab-title'>
              <h2>my expierence</h2>
              <div className='tab-underline'></div>
            </div>
            <div className='jobs-center'>
              {/* btn container */}
              <div className='tab-btn-container'>
                {tabData.map((item, index) => {                    
                  return (
                    <button
                      key={item.id}
                      onClick={()=>this.setState({value:index})}
                      className={`job-btn ${index === this.state.value && 'active-btn'}`}
                    >
                      {item.company}
                    </button>
                  )
                })}
              </div>
              {/* job info */}
              <div className='job-info'>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className='job-date'>{dates}</p>
                {duties.map((duty, index) => {
                  return (
                    <div key={index} className='job-desc'>
                      <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                      <p>{duty}</p>
                    </div>
                  )
                })}             
              </div>
            </div>
            <button type='button' className='tab-info-btn'>
              more info
            </button>
          </section>
        );
    }
}


export default Tab;