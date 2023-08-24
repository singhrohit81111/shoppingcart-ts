import { useEffect, useState } from "react";
import PRODUCTS from '../data.json';
import { useNavigate, useParams } from "react-router-dom";
import './style2.css';
import { useDispatch } from "react-redux";
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
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if(!id) return;

        const filteredProducts = PRODUCTS.filter((z) => { return z.id == +id }) as Product[];
        setProducts(filteredProducts);
    }, [id]);

    const handleBuy = (product: Product) => {
        dispatch(AddProduct(product));
        navigate("/cart");
    }

    return (
        <div className="productPage">
            {products.map(product => (
                <div className="product" key={product.id}>
                    <div className="productImg"><img className="ig" src={product.photo} alt="No Image" /></div>
                    <div className="parent">
                        <div className="productName">{product.name}</div>
                        <div className="productLaunch">{product.launch}</div>
                        <div className="productPrice"><span>Rs.</span>{product.price}</div>
                        <div className="moreDetails">{product.details}</div>
                        <div><button onClick={() => { handleBuy(product) }}>Buy Now</button></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
