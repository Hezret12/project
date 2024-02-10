import React from 'react'
import Img2 from './ima2.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { FaBasketShopping } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa";
import { addProduct } from '../Redux/Action/cart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Cart() {
  const Products = useSelector(state => state.Products.products);
  const dispatch = useDispatch()
  const showToastMessage = () => {
    toast.success("Ustunlikli alyndy !")
  };
  return (
  
    <div className='grid grid-cols-4 gap-2 my-12 max-[700px]:grid-cols-2'>
            {Products.map((product)=>(
            <div  key={product.id} className='bg-white'>
            <div className='h-[200px] p-2'>
              <img src={Img2} alt='product'/>
            </div>
            <h4 className='text-center product-title'>{product.info}</h4>
            <div>
            <button className='bg-green-500 text-white p-1 m-2 text-xs'>Ammarda</button>
            <hr/>
            <div className='flex justify-evenly my-3'>
             <h3 className='text-center ml-3 text-[30px]'><strong>{product.price}m</strong></h3>
            
             <div className='flex gap-2 '>
             <div onClick={() => addProduct(dispatch, product)}   className='pointer'>
              <FaBasketShopping onClick={showToastMessage} color='white' className='size-10 bg-[#f89c00] p-2 rounded-full'/>
              <ToastContainer />
             </div>
              <FaBolt color='white' className='size-10 bg-[#f89c00] p-2 rounded-full' /></div>
             </div> 
        
      </div> 
         
         </div> ))}
         
       
    </div>
    
  )
}
