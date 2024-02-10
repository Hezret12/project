import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';

 import Banner from '../Body/banner.jpg'
 import Banner2 from '../Body/banner2.jpg'
 import Banner3 from '../Body/banner3.jpg'

const Swipper =() => {
   return (
    
     <Swiper 
       spaceBetween={1}
       slidesPerView={1}
       modules={[Autoplay, Navigation, Pagination]}
       pagination={{ clickable: true }}
       navigation
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     >
      <SwiperSlide><img className='h-[500px] ' src={Banner} alt='img'/></SwiperSlide>
      <SwiperSlide><img className='h-[500px] ' src={Banner2} alt='omg1'/></SwiperSlide>
      <SwiperSlide><img className='h-[500px] ' src={Banner3} alt='img'/></SwiperSlide>
     
     </Swiper>

    
  
  );
 };

 export default Swipper
