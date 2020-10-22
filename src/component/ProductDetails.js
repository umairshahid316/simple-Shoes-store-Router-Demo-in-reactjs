import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
  
    const shoes ={
        "Nike":{
            name:"NIke",
            img:"https://www.famousfootwear.com/ProductImages/shoes_ia92637.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter"
        },
        "Puma":{
            name:"Puma",
            img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/375429/01/sv01/fnd/IND/fmt/png/PUMA-Dryflex-IDP-Men's-Shoes"
        },  
        "Service":{
            name:"Service",
            img:"https://image.made-in-china.com/2f0j00CDLGeIhBJfcR/Greatshoe-Hot-Selling-Man-Sneaker-Casual-Shoes-Jogging-Running-Walking-Sport-Shoes-OEM-ODM-Brand-Service-Footwear-Men-Shoes.jpg"
        },
        "Bata":{
            name:"Bata",
            img:"https://cdn.shopify.com/s/files/1/0143/1552/0054/products/824-3716-c.jpg?v=1566795772"
        }  
    }

    const {productid} =useParams();
    const product =shoes[productid];
    const {name, img} =product;
    
    return (
        <div>
             <h4>{name}</h4>
            <img src={img} alt={name}/>
        </div>
    )
}
