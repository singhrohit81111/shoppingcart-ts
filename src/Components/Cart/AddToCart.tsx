import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct, DeleteProduct,Decrement } from '../../Redux/Actions';
import PriceBar from './PriceBar';
import NoData from './NoData';
import CartNav from './CartNav';
import style1 from './style.module.css';


interface Product {
    id: number;
    quantity: number;
    name: string;
    launch: string;
    photo: string;
    price: number;
    details: string;
}

export default function AddToCart() {
    const CartChange = useSelector((state: any) => state.CartChange); // Update 'any' with your actual state type
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        setProducts(CartChange);
    }, [CartChange]);

    const handleRemoveItem = (e: any) => {
        console.log("hello");
        dispatch(DeleteProduct(e));
    };

    const handleOperation = (id: any, operation: string) => {
        if (operation === 'Decrement') {
            dispatch(Decrement(id));
         } else {
            dispatch(AddProduct(id));
         }
    };
    return (
        <div className={style1.cart}>
            <CartNav />

            {products.map((product) => (
                <div className={style1.product} key={product.id}>
                    <div className={style1.productInfo}>
                        <div className={style1.productImg}>
                            <img className={style1.Img} src={product.photo} alt='no image' />
                        </div>
                        <div className={style1.otherInfo}>
                            <div className={style1.name}>{product.name}</div>
                            <div className={style1.launch}>{product.launch}</div>
                            <div className={style1.itemPrice}>
                                <span>Rs.</span>
                                {product.price}
                            </div>
                            <div className={style1.logic}>
                                <button onClick={() => handleOperation(product, 'Decrement')}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => handleOperation(product, 'Increment')}>+</button>
                            </div>
                            <div className={style1.removeItem}>
                                <button onClick={() => handleRemoveItem(product.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <NoData dataLength={products.length} />
            <PriceBar products={products} />
        </div>
    );
}
