import { FaBasketShopping } from "react-icons/fa6";
import { Dropdown,DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { useSelector } from "react-redux";
import Img2 from './ima2.jpg'


export default function DropDown() {
    const Total = useSelector(state=>state.Cart.total)
    const sum = useSelector(state=>state.Cart.sum)
    const cardproducts = useSelector(state=>state.Cart.cartPoducts)

    // console.log(Total)
  return (
    <div>
         <Dropdown>
              <DropdownToggle className="dropDown border-none flex">  <FaBasketShopping className='text-sky-500 size-8 relative'/> 
              <h4 className='absolute  ml-[30px] text-black  '>{Total}</h4>
              <h5 className="text-black mt-[13px]">{sum} TMT</h5>
          </DropdownToggle>
            
              
              <DropdownMenu> 
                {
                    cardproducts ? cardproducts.map((item => {
                        return(
                            <DropdownItem key={item.id} ><div className="flex"><img src={Img2} className="h-[40px]"/>
                             <small className="text">{item.info}</small> </div> 
                            <strong>{item.price} TMT</strong></DropdownItem>
                        )
                    })):''
                }
                
                
                <DropdownItem tag='a' href='/shops'>Karta Gecmek</DropdownItem>
              </DropdownMenu>
            </Dropdown>
           
    </div>
  )
}
