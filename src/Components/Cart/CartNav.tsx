import { useNavigate } from 'react-router';
import style1 from './style.module.css';


export default function CartNav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className={style1.cartNav}>
      <div className={style1.cartHeading}>Cart</div>
      <button className={style1.cartButton} onClick={handleClick}>
        Home
      </button>
    </div>
  )
}
