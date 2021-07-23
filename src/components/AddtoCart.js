import React ,{useState}from 'react'

import { FaCheck } from 'react-icons/fa'
export default function AddtoCart({PProduct}) {
    const [mount,setMount] = useState(1);
    const {id,stock,colors} = PProduct;
    const [mainColor ,setMaincolor] = useState(colors[0])


    const increase = ()=>{
        setMount( (oldMount)=>
        {
            let tempMount = oldMount + 1 ;
            if(tempMount > stock)
             {
                 tempMount = stock;
             }
             return tempMount;
        }

        )
    }
    const descrece = ()=>{
        setMount((oldMount)=>{
            let tempMount = oldMount -1 ;
            if(tempMount<1)
            {
                tempMount = 1;}
            return tempMount;
        }
          
        )
    }
    return (
        <div>
             <div>
                 <h2>Color : </h2>
                 {
                     colors.map((color,index)=>{
                       <button key ={index} 
                               style={{'background':color}}
                               onClick = {setMaincolor(color)}
                        >
                            {mainColor === color ? <FaCheck/> :null}
                        </button>
                     })
                 }
             </div> 
             <div>
                 <button onClick={descrece}>-</button>
                 <span>{mount}</span>
                 <button onClick={increase}>-</button>
             </div>
             <div>
                 <button>Add to Cart</button> 
            </div>             
        </div>
    )
}
