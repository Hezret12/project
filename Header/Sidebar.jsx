import { AiOutlineBars } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import {SideData} from './SideData';
export default function Sidebar() {
  const {t} = useTranslation();
  return (
    <div className=''>
        <div>
        <table className="table1 w-[350px] max-[990px]:hidden ">
  <thead>
    <tr >
       <th className="flex p-3 bg-[#5E83DE] text-[#FFFFFF]"> <AiOutlineBars className="mt-1 mr-3"/> {t("category")}</th>
    </tr>
  </thead>
  <tbody className="bg-[#FFF] " >
    {SideData.map((item)=>(
     <tr key={item.id} className="hover:bg-slate-500 hover:text-white" >
       <td className="w-[300px] flex justify-between pl-7 py-3 pr-2">{item.name}<AiFillCaretRight className='mt-2 '/></td> 
      </tr> ))}

      <tr className="hover:bg-slate-500 hover:text-white " >
       <td className="w-[300px] flex justify-between pl-7 py-3 pr-2 mb-3">Service Hyzmatlar</td> 
      </tr>
  </tbody>
    
  
 
  
</table>
        </div>
   </div>
  )
}
