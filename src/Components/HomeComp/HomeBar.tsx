import { useNavigate } from 'react-router'
import style from './style.module.css';

export default function HomeBar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/cart");
    }
    return (
        <div>
            <div className={style.homeBar}>
                <div className={style.homeTitle}>Trending Smartphones</div>
                <button className={style.homeBarButton} onClick={handleClick}>Cart</button>
            </div>
        </div>
    )
}
