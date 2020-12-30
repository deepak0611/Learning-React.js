import React from 'react';
import './menu.css';
 

class MenuCards extends React.Component{
    constructor(props){
        super(props);
    }   
   
    render(){
        return (
            <div className='menu-section-center'>
            {this.props.items.map((menuItem) => {
                const { id, title, img, desc, price } = menuItem;
                return (
                <div key={id} className='menu-item'>
                    <img src={img} alt={title} className='menu-item-photo' />
                    <div className='menu-item-info'>
                    <header>
                        <h4>{title}</h4>
                        <h4 className='menu-item-price'>${price}</h4>
                    </header>
                    <p className='menu-item-text'>{desc}</p>
                    </div>
                </div>
                );
            })}
            </div>
        );        
    }
}

export default MenuCards;