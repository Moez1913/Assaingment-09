import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
import { Helmet } from "react-helmet";


const VewServices = () => {
  const [services, setServices] = useState([]); // ✅ Default to an empty array
  const { category } = useParams();
  const data = useLoaderData();
  console.log(data)

  useEffect(() => {
    if (data) {
      const filteredServices = data.filter(item => item.category === category);
      setServices(filteredServices);
    }
  }, [data]); // ✅ Only updates when `category` or `data` changes

  console.log(category);
  console.log(services)
 

  return (
 <>
     <Helmet>
  <title>CareerGuidePro|ViwServices</title>
</Helmet>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {
            services.map((service,index)=><ServiceDetails key={index} service={service}></ServiceDetails>)
        }
      </div>
    </div>
  
  </>
  );
};

export default VewServices;
