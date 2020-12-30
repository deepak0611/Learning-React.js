import React from 'react';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
// import '../App.css'
import './accordian.css'

class Accordian extends React.Component{
    constructor(props){
        super(props);
        this.state={showInfo:false};
    }
   
    toggle(val){
        this.setState({showInfo:val});
    }

    render(){
        return (
        <div className='question'>
            <div className="header">
                <h4>{this.props.title}</h4>
                <button className='btn' onClick={()=>this.toggle(!this.state.showInfo)}>
                {this.state.showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {this.state.showInfo && <p>{this.props.info}</p>}
           
        </div>
        );        
    }
}

export default Accordian;