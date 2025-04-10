import {BiBed,BiBath,BiArea} from 'react-icons/bi'
import PropTypes from 'prop-types';

const House = ({ house }) => {
  const {image,type,country,address,bedrooms,bathrooms,surface,price}=house;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={image}/>
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
        <div className='bg-violet-500 rounded-full text-white px-3'>{country}</div>
      </div>
      <div className='text-lg text-left font-semibold max-w-[260px]'>{address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-grey-600 gap-1'>
          <div className='text-[20px]'><BiBed/></div>
          <div>{bedrooms}</div>
        </div>
        <div className='flex items-center text-grey-600 gap-1'>
          <div className='text-[20px]'><BiBath/></div>
          <div>{bathrooms}</div>
        </div>
        <div className='flex items-center text-grey-600 gap-1'>
          <div className='text-[20px]'><BiArea/></div>
          <div>{surface}</div>
        </div>
      </div>
      <div className='text-lg text-left font-semibold text-violet-600 mb-4'>Rs. {price}</div>
    </div>
  )
}
House.propTypes = {
  house: PropTypes.shape({
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    surface: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default House