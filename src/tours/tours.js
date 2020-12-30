import React from 'react';
import './tour.css';
import {tourData} from './tourData';
import Tour from './tour.js';

function updateTourData(id){
    const temp = this.state.tourData;
    this.setState({
        tourData: temp.filter((data)=> data.id !== id ),
    });
    // console.log("I have called!");
}



class Tours extends React.Component{
    constructor(props){
        super(props);       
        this.state={
            tourData:tourData,
        } 
        updateTourData = updateTourData.bind(this);
    }   

    
   
    render(){
        // if(this.state.divHeight===0){
        //     return(
        //     <div className="loading">
        //         <h1>loading...</h1>
        //     </div>
        //     );
        // }
        return (
            <main className="tour-main">
                <section className="tour-section">
                    <div className="tour-title">
                        <h2>my tours</h2>
                        <div className="tour-underline"></div>
                    </div>
                    <div>
                        {
                        this.state.tourData.length ===0 ?
                        <center><button className="tour-reload-btn" 
                        onClick= {() => this.setState({tourData:tourData})}
                        >Refresh</button></center>
                        :
                        this.state.tourData.map((tour) => {
                        return <Tour key={tour.id} {...tour} update={updateTourData}/>;
                        })                       
                        }
                                            
                        {/* {this.state.tourData.map((tour) => {
                        return <Tour key={tour.id} {...tour} update={updateTourData}/>;
                        })} */}
                    </div>
                </section>
            </main>
        );        
    }
}

export default Tours;