import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style1 from './Cart/style.module.css';
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "../Redux/Actions";

interface Product {
    id: number;
    quantity: number;
    name: string;
    launch: number;
    photo: string;
    price: number;
    details: string;
}

export default function ProductList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const { data, loading } = useSelector((state: any) => { return state.userReducer });
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;

        const filteredProducts = data.filter((z: Product) => { return z.id == +id }) as Product[];
        setProducts(filteredProducts);
    }, [id]);

    const handleBuy = (product: Product) => {
        dispatch(AddProduct(product));
        navigate("/cart");
    }
    if (loading) return <p>Loading...</p>
    return (
        <div className={style1.productPage}>
            {products.map(product => (
                <div className={style1.product} key={product.id}>
                    <div className={style1.productImg}><img className={style1.ig} src={product.photo} alt="No Image" /></div>
                    <div className={style1.parent}>
                        <div className={style1.productName}>{product.name}</div>
                        <div className={style1.productLaunch}>{product.launch}</div>
                        <div className={style1.productPrice}><span>Rs.</span>{product.price}</div>
                        <div className={style1.moreDetails}>{product.details}</div>
                        <div><button onClick={() => { handleBuy(product) }}>Buy Now</button></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
