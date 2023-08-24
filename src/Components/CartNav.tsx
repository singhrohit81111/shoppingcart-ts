import { useNavigate } from 'react-router';

export default function CartNav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='cartNav'>
      <div className='cartHeading'>Cart</div>
      <button className='cartButton' onClick={handleClick}>
        Home
      </button>
    </div>
  )
}
