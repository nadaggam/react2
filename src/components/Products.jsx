import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NavLink,useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'
 import '../Css/products.css'
import { Form } from 'react-bootstrap/Form';
export function Products() {

  //get id for admin
  let isAdmin;
  let userId = localStorage.getItem('user_id')
  if(userId==1){
   isAdmin=true;
  }
  else{
    isAdmin=false;

  }



    //get products
    let [products, setProducts] = useState([]);
    let getAllProduct = async () => {
        try {
            let response = await axios.get("http://localhost:3005/products");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllProduct();
    }, []);
      let decreaseQuantity = async (productId) => {
        let updatedProducts = products.map((product) => {
          if (product.id === productId && product.quantity > 0) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
        setProducts(updatedProducts);
        try {
          await axios.put(`http://localhost:3005/products/${productId}`, { quantity: updatedProducts.find(product => product.id === productId).quantity });
        } catch (error) {
          console.log(error)
        }
      };
      let deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3005/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
            // navigate('/products');
        } catch (error) {
            console.log(error);
        }
    };
         return (
        <div className='row' style={{marginTop:"30px"}}>
            {products.map((product) => (
              
                <div className='col-lg-2 col-sm-6 col-md-3' key={product.id}>
                  
                    <Card style={{ width: '15rem',height:"440px",textAlign:"left",marginLeft:"120px"}}>
                        <Card.Img className='pimg' style={{height:"50%"}} variant="top" src={product.productimg} />
                        <Card.Body>
                            <Card.Title >{product.productName}</Card.Title>
                            <Card.Text style={{marginBottom:"15px"}} > $
                                {product.productPrice}
                            </Card.Text>
                            <Card.Text style={{marginBottom:"15px"}}>
                               quantity : {product.quantity}
                            </Card.Text >
                            {/* <Card.Text style={{color:"#E57C23",marginBottom:"15px"}}><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> </Card.Text > */}
                            <button  className='btn2' onClick={() => decreaseQuantity(product.id)}>  {product.quantity == 0 ? "Sold out" : "Add Product"}</button>
                            {/* <NavLink to={`/ProductForm/${product.id}`}> <i className='fs-2 text-warning mx-1 bi bi-eye-fill'></i>
                                      </NavLink>                            
                                         
                            {isAdmin && <NavLink className="nav-link" to="/ProductForm"><i class="bi bi-trash3-fill danger"></i></NavLink>}
                            {isAdmin && <NavLink className="nav-link" to="/ProductForm"><i class="bi bi-pencil-square"></i></NavLink>} */}
                           {isAdmin&&  <NavLink to = {`/Products/${product.id}/edit`}> <i className='fs-4 text-info mx-1 bi bi-pencil-square'></i></NavLink>}
                     <i className='fs-4 text-danger mx-1 bi bi-trash3-fill' onClick={() => deleteProduct(product.id)}></i>    

                     {isAdmin&&  <NavLink to = {`/Products/${product.id}`}><i className='fs-4 text-warning mx-1 bi bi-eye-fill'></i></NavLink>}
                             </Card.Body>
                    </Card>
                    
                </div>
                
            ))}
            <div>
                 <NavLink  to={`/Products/0/edit`}><button>add</button></NavLink>
                 </div>
        </div>
        
    );
     } //f1 return
 //main fun


