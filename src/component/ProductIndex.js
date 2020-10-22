import React from 'react'
import { Link } from 'react-router-dom'

export  function ProductIndex() {
    
    const shoes ={
        "Nike":{
            name:"NIke",
            img:"https://www.famousfootwear.com/ProductImages/shoes_ia92637.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter"
        },
        "Puma":{
            name:"Puma",
            img:"https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/10137105/2019/7/8/2c084dab-54c0-47f6-be9b-c57b776d8afa1562583349441-Puma-Men-Black-Cell-Phase-Gym-Shoes-6381562583348335-1.jpg"
        },  
        "Service":{
            name:"Service",
            img:"https://image.made-in-china.com/2f0j00CDLGeIhBJfcR/Greatshoe-Hot-Selling-Man-Sneaker-Casual-Shoes-Jogging-Running-Walking-Sport-Shoes-OEM-ODM-Brand-Service-Footwear-Men-Shoes.jpg"
        },
        "Bata":{
            name:"Bata",
            img:"https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-6265-c_800x.jpg?v=1579263398"
        }  
    }



    return (
        <div>
<ul>
            {Object.entries(shoes).map(([productid,{name, img}])=> 
                (
                    <li key={productid}>
                          <Link to={productid}>  
                        <h2>{name}</h2>
                        <img src={img} alt={name} />
                        </Link>
                    </li>
                )
            )}    
            </ul>               
        </div>
    )
}
