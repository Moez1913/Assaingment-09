import photo from "../../../public/assest/internnship.jpg"

const LeftSide = () => {
    return (
       
        <div className="w-1/4 p-4 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-blue-900">Unlock Your True Potential!</h2>
        <p className="mt-2 text-gray-700">
          Explore expert career advice, skill-building workshops, and networking opportunities to accelerate your professional journey.
        </p>
        <img 
          src={photo}
          alt="Career Growth" 
          className="mt-4 w-full rounded-lg"
        />
      </div>
      
           
          
     
          
    );
};

export default LeftSide;