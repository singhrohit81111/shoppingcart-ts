import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AddProduct } from '../../Redux/Actions';

export default function HomeData({ products }: any) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick1 = (product: any) => {
        dispatch(AddProduct(product));
        navigate("/cart");
    }
    return (
        <div className="homeData">
            {products.map((product: any) => {
                return <div style={{ borderBottom: "1px solid black" }} className="item">
                    <div>
                        <div><img src={product.photo} alt="No" height="100px" /></div>

                        <div>
                            <span className="itemDescription">Model:</span>
                            <span className="itemVal">{product.name}</span>
                        </div>

                        <div>
                            <span className="itemDescription">Launch Year:</span>
                            <span className="itemVal">{product.launch}</span>
                        </div>
                        <div>
                            <span className="itemDescription">Price:</span>
                            <span>Rs.</span>
                            <span >{product.price}</span>
                        </div>
                        <div className="h5" ><Link to={`/${product.id}`}><span>...</span><span>more details</span></Link></div>
                        <div className="buttonContainer">
                            <button className='buyButton' onClick={() => { handleClick1(product) }}>BUY</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
