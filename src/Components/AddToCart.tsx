import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style2.css';
import { DeleteProduct } from '../Redux/Actions';
import PriceBar from './PriceBar';
import NoData from './NoData';
import CartNav from './CartNav';

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

    const handleOperation = (e: number, operation: string) => {
        const updatedData = products.map((product) => {
            if (operation === 'Decrement') {
                if (product.id === e && product.quantity > 1) {
                    console.log(product.quantity - 1);
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            } else {
                if (product.id === e) {
                    console.log(product.quantity);
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            }
        });
        setProducts(updatedData);
    };
    return (
        <div className='cart'>
            <CartNav />

            {products.map((product) => (
                <div className='product' key={product.id}>
                    <div className='productInfo'>
                        <div className='productImg'>
                            <img className='Img' src={product.photo} alt='no image' />
                        </div>
                        <div className='otherInfo'>
                            <div className='name'>{product.name}</div>
                            <div className='launch'>{product.launch}</div>
                            <div className='itemPrice'>
                                <span>Rs.</span>
                                {product.price}
                            </div>
                            <div className='logic'>
                                <button onClick={() => handleOperation(product.id, 'Decrement')}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => handleOperation(product.id, 'Increment')}>+</button>
                            </div>
                            <div className='removeItem'>
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
