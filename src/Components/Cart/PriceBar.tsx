import style1 from './style1.module.css';

export default function PriceBar({ products }: any) {
    console.log(products);
    const totalArray = products.map((e: any) => e.quantity * e.price);
    const totalPrice = totalArray.reduce((acc: number, e: number) => acc + e, 0);
    console.log(totalPrice);
    return (
        <div>
            {products.length > 0 && <div className={style1.priceBar}>
                <div className={style1.priceDetails}>
                    PRICE DETAILS:
                </div>
                <div className={style1.price}>
                    <div>Price<span>({products.length} item)</span></div>
                    <div><span>Rs.</span>{totalPrice}</div>
                </div>
                <div className={style1.discount}>
                    <div>Disocunt</div>
                    <div> 10%</div>
                </div>
                <div className={style1.delivery}>
                    <div>Delivery Charges</div>
                    <div>Free</div>
                </div>
                <div className={style1.totalAmt}>
                    <div>Total Amount</div>
                    <div><span>Rs.</span>{totalPrice}</div>
                </div>
                <div className={style1.placeOrder}>
                    <button className={style1.placeOrderButton}>Place Order</button>
                </div>
            </div>}
        </div>
    )
}
