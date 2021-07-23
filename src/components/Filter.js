import React,{useContext} from 'react'
import {FilterContext} from '../utils/filterContext.js'
import {getUniqueItem} from '../utils/helper'
export default function Filter() {
    const pro = useContext(FilterContext);
    const categories = getUniqueItem(pro.all_products,'category')
    const company = getUniqueItem(pro.all_products,'company')
    const color = getUniqueItem(pro.all_products,'colors')
    
    return (
        <div className="filter">

            <input type="search" value="" placeholder="Search" name="seaarch" id="search"/>
            <h5>Category</h5>
            <ul className="category">
                {categories.map((c,index)=> 
                   {
                     return( <li> <button
                     key={index} onClick={pro.updatesFilter} type="button" name="category">{c}</button></li>)
                   }
                )}
            </ul>
            <h5 for="company">Company</h5>
            <select id="company" name="company" value={company} onChange={pro.updatesFilter}>
                {company.map(item => {return(<option value={item}>{item}</option>)})}
            </select>

            <div>
                <h5>Colors</h5>
                {color.map(item=>{
                    if(item === 'all'){
                    return( 
                    <button style={{'border':'none','background-color':'white'}}>All</button>)
                    }else
                    return( 
                        <button className="btn-color" style={{'background-color':item,'border-radius':'50%'}}> </button>)
                    })}
            </div>
            <div className="checkbox-pt">
                <label>Free Shiping </label>
                <input type="checkbox"></input>
            </div>
            <div>
                <button className="clear-btn" onClick={pro.ClearFilter} name="clearfilter" type="button">Clear Filters</button>
            </div>
            <div>
            
            </div>
        </div>
    )
}
