import { useNavigate } from 'react-router'

export default function HomeBar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/cart");
    }
    return (
        <div>
            <div className="homeBar">
                <div className="homeTitle">Trending Smartphones</div>
                <button className="homeBarButton" onClick={handleClick}>Cart</button>
            </div>
        </div>
    )
}
