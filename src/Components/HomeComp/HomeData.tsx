import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AddProduct } from '../../Redux/Actions';
import style from './style.module.css';

export default function HomeData({ products }: any) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick1 = (product: any) => {
        dispatch(AddProduct(product));
        navigate("/cart");
    }
    return (
        <div className={style.homeData}>
            {products.map((product: any) => {
                return <div style={{ borderBottom: "1px solid black" }} className={style.item}>
                    <div>
                        <div><img src={product.photo} alt="No" height="100px" /></div>

                        <div>
                            <span className={style.itemDescription}>Model:</span>
                            <span className={style.itemVal}>{product.name}</span>
                        </div>

                        <div>
                            <span className={style.itemDescription}>Launch Year:</span>
                            <span className={style.itemVal}>{product.launch}</span>
                        </div>
                        <div>
                            <span className={style.itemDescription}>Price:</span>
                            <span>Rs.</span>
                            <span >{product.price}</span>
                        </div>
                        <div className={style.h5} ><Link to={`/${product.id}`}><span>...</span><span>more details</span></Link></div>
                        <div className={style.buttonContainer}>
                            <button className={style.buyButton} onClick={() => { handleClick1(product) }}>BUY</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
