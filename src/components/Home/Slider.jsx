
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Slider = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change') }
       >
        <SwiperSlide className="relative flex items-center justify-center bg-blue-500 text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold">Career Growth Made Easy</h2>
          <p className="mt-3 text-lg">🚀 Take the next step in your career with expert guidance.</p>
          <p className="text-lg">💡 Personalized counseling, resume reviews, and networking opportunities.</p>
          <button className="mt-5 px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-lg">Start Your Journey</button>
        </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center bg-green-500 text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold">Master Your Skills & Get Hired</h2>
          <p className="mt-3 text-lg">📢 Gain in-demand skills with our expert-led workshops.</p>
          <p className="text-lg">✅ Public speaking, LinkedIn optimization, coding bootcamps & more!</p>
          <button className="mt-5 px-6 py-2 bg-white text-green-500 font-semibold rounded-lg shadow-lg">Explore Courses</button>
        </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex items-center justify-center bg-purple-500 text-white">

        <div className="text-center p-8">
          <h2 className="text-3xl font-bold">Elevate Your Freelancing & Internship Game</h2>
          <p className="mt-3 text-lg">💼 Land high-paying freelance gigs & internships.</p>
          <p className="text-lg">🎯 Learn portfolio building, interview prep, and networking strategies.</p>
          <button className="mt-5 px-6 py-2 bg-white text-purple-500 font-semibold rounded-lg shadow-lg">Start Earning</button>
        </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}




export default Slider;