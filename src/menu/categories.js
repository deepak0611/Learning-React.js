import React from 'react';
import './menu.css';

 
class Categories extends React.Component{
    render(){
        return (
            <div 
            className="menu-cat-container"
            >
            {this.props.categories.map((category, index) => {
                return (
                <button
                    type="button"
                    className="menu-filter-btn"
                    key={index}
                    onClick={() => this.props.filterItems({category})}
                >
                    {category}
                </button>
                );
            })}
            </div>
        );        
    }
}

export default Categories;