import React from 'react';
import {menuData} from './menuData.js';
import Categories from './categories.js';
import './menu.css';
import MenuCards from './menuCards.js';

const categories = ['all', ...new Set((menuData.map((data)=> data.category)))];


function filterItems(category){
    const cat = category.category;
    if(cat==='all'){
        this.setState({
            menuData:menuData,
        });
        return;
    }
    const hell = menuData.filter((data)=> data.category ===cat );
    this.setState({menuData : hell});
}


class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={menuData:menuData};
        filterItems=filterItems.bind(this);
    }   

    
    
    render(){
        return (
            // <main className="main">
                <section className="menu">
                <div className="menu-title">
                    <h2>My menu</h2>
                    <div className="menu-underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />                
                <MenuCards items={this.state.menuData}/>
                </section>
            // </main>
        );        
    }
}

export default Menu;