import CountryDropdown from '../CountryDropdown/CountryDropdown';
import PropertyDropdown from '../PropertyDropdown/PropertyDropdown';
import PriceRangeDropdown from '../PriceRangeDropdown/PriceRangeDropdown';

import { RiSearch2Line } from "react-icons/ri";
import { useContext } from 'react';
import { HouseContext } from '../HouseContext/HouseContext';


const Search = () => {
  const {handleClick} = useContext(HouseContext)
  return (
    <div className='px-[30px] py-6 max-w-[1170px] flex flex-col mx-auto items-center lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent rounded-ld '>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <button onClick={()=>handleClick()}
      className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line />
      </button>
    </div>
  )
}

export default Search