import React from 'react';
import './tour.css';


class Tour extends React.Component{
    constructor(props){
        super(props);
        this.state={
            readMore:false,
        };
    }
   
    setReadMore(val){
        this.setState({readMore:val});
    }
    
    render(){
        const {id,name,image,info,price} = this.props;
            return (            
                <div className="single-tour">
                <img src={image} alt={name} />
                <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">&#8377; {price}</h4>
                </div>
                <p>                
                    {this.state.readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => this.setReadMore(!this.state.readMore)}>
                    {this.state.readMore ? 'show less' : '  read more'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => this.props.update(id)}>
                    not interested
                </button>
                </footer>
            </div>
            );  
        
        
    }
}

export default Tour;