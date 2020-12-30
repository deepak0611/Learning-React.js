import React from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
// import '../App.css';
import './slider.css';
import {sliderData} from './sliderData.js'

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={currIndex:0};
    }

    componentDidMount(){
        this.autoSlide = setInterval(
                ()=>this.setIndex(this.state.currIndex + 1),
                5000
            ); 
            
    }
    componentWillUnmount(){
        clearInterval(this.autoSlide);       
    }

    setIndex(id){
        if(id >= sliderData.length){
            id = 0;
        }
        else if(id<0){
            id = sliderData.length -1;
        }
        this.setState({currIndex : id});
    }

    render(){

      return(
          
        <section className="slider-section">
            <div className="slider-title">
                <h2>
                <span>/</span>reviews
                </h2>
            </div>
            <div className="slider-section-center">      
                {sliderData.map((slide,slideIndex)=>{
                    const {id,image,name,title,quotes} = slide;
                    let position="singleSlide nextSlide";
                    if(slideIndex===this.state.currIndex){
                        position="singleSlide activeSlide";
                    }                    
                    if(slideIndex===this.state.currIndex -1 || 
                        (this.state.currIndex===0 && slideIndex === sliderData.length-1)){
                        position="singleSlide lastSlide";
                    }  

                    return (
                        <div className={position} key={id}>
                        <img src={image} alt="profile" className="slider-person-img" />
                        <h4>{name}</h4>
                        <p className="slider-title">{title}</p>
                        <p className="slider-text">{quotes}</p>
                        <FaQuoteRight className="slider-icon" />
                        </div>
                    );
                })}                
                
                <button className="slider-prev" onClick={()=>this.setIndex(this.state.currIndex -1)}>
                <FiChevronLeft />
                </button>
                <button className="slider-next" onClick={()=>this.setIndex(this.state.currIndex +1)}>
                <FiChevronRight />
                </button>
            </div>
        </section>

      );          
    }
}

export default Slider;














