 import hybrid from '/public/assest/hybrid.jpg'
 const Banner = () => {
    return (
      <div className="relative bg-cover bg-center text-white py-20 px-5 rounded-2xl shadow-lg" 
        style={ { backgroundImage: `url(${hybrid})` }}>
        
        <div className="bg-black/50 p-10 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Shape Your Future with Expert Career Guidance</h1>
          <p className="text-lg mb-6">
            Get personalized counseling, resume reviews, and skill-building workshops to accelerate your career growth.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
            Get Started Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  