import React from 'react';
import Accordian from './accordian';
import './accordian.css'
import {questions} from './accordianData.js';

class AccordianSet extends React.Component{

    render(){
        return(
            <main>
                <div className='container'>
                    <h3>questions and answers about login</h3>
                    <section className='info'>
                    {questions.map((question) => {
                        return (
                        <Accordian key={question.id} title={question.title} info={question.info}></Accordian>
                        );
                    })}
                    </section>
                </div>
            </main>
        );
    }
}

export default AccordianSet;