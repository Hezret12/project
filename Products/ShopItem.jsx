import Img from './ima2.jpg'
import { useSelector } from "react-redux";

function ShopItem() {
  const cardproducts = useSelector(state=>state.Cart.cartPoducts)
    console.log(cardproducts)
  
  return (
    <div className='w-[50%] ml-[70px] mt-[20px] bg-white mb-[180px]'>
       
       <div className='flex justify-between  p-4 '>
        <h3>Sebet</h3>
        <p>Hemme onumi pozmak</p>
       </div>
       <hr/>
    
       
           {cardproducts.length ? cardproducts.map((item) =>(            
              <div className='flex justify-between mx-4' key={item.id}>
               <img src={Img} className='h-[70px]' />

                   <h4>{item.info}</h4>

                 <span>0</span>
     
                <strong>{item.price}</strong>
    
          </div>    )) : ''} 
                    
        
       <div className='text-end mr-4 p-4'>
       <h3><strong>Total: 2345 TMT</strong></h3>
        <p>0 products with total </p>
       </div>
    </div>
  );
}

export default ShopItem;