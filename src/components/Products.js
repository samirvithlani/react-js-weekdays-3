import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export const Products = () => {
  var navigate = useNavigate();
    var products = [

        {
            id:101,
            name:"I-pad"
        },{
            id:102,
            name:"I-phone"
        },
        {
            id:103,
            name:"I-watch"
        }
    ]
  return (
    <div>

        {
          localStorage.getItem("doctorid")  ?
            products.map(product=>{
                return (
                    <ul>
                        <Link to = {`/product/${product.name}`}>Product {product.id}</Link>
                    </ul>
                )
            })
        :navigate("/login")}




{/* 
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
        <li>
          <Link to="/product/3">Product 3</Link>
        </li>
      </ul> */}
    </div>
  );
};
