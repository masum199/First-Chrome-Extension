
import axios from "axios";
import { useState } from "react"
import { TbFidgetSpinner } from "react-icons/tb";

export const CountButton = () => {
  // set loader
  const [loading, setLoading] = useState(false);
  // get country
  const [country, setCountry] = useState('');
  // get city
  const [city,setCity] = useState("")

  const fetchLocation = async () => {

    try {
      // onclick loader true
      setLoading(true);

      // use axios to get data
      const response = await axios.get(`https://ipinfo.io/103.167.208.10?token=${process.env.PLASMO_PUBLIC_MY_DATA}`);
      const { country, city } = response.data;
      // set country
      setCountry(country);
      // set city
      setCity(city);

    } catch (error) {
      // Handle error
    } finally {
      // set loading false after showing location
      setLoading(false);
    }
  };
  return (
    // full container
    <div className="plasmo-text-center plasmo-font-semibold plasmo-py-4">

      {/* location container start */}

      <div className="plasmo-text-2xl plasmo-px-2 plasmo-h-28 plasmo-w-96 plasmo-text-white">
    {loading ? "" : country && <p className="plasmo-h-10">My Country Is {country}</p>}
    {loading ? "" : city && <p>And My City is {city}</p>}
    
    </div>
    {/* location container end */}

    {/* button container  */}
    <div className="plasmo-flex plasmo-justify-center plasmo-pb-2">
    <button
      className={`plasmo-border plasmo-text-white  plasmo-border-white plasmo-font-bold plasmo-rounded-lg plasmo-text-sm plasmo-px-5 plasmo-h-12  plasmo-pb-2 plasmo-w-52 ${loading ? ' plasmo-flex plasmo-justify-center plasmo-items-center' : ''} `}
      onClick={fetchLocation}
      disabled={loading}
    >
      {loading ? <TbFidgetSpinner size={24} className='plasmo-animate-spin' /> : 'Show my location'}
    </button>
    </div>
    {/* button container end */}
  </div>
  )
}
