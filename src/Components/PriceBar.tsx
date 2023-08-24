export default function PriceBar({ products }: any) {
    console.log(products);
    const totalArray = products.map((e: any) => e.quantity * e.price);
    const totalPrice = totalArray.reduce((acc: number, e: number) => acc + e, 0);
    console.log(totalPrice);
    return (
        <div>
            {products.length > 0 && <div className='priceBar'>
                <div className='priceDetails'>
                    PRICE DETAILS:
                </div>
                <div className='price'>
                    <div>Price<span>({products.length} item)</span></div>
                    <div><span>Rs.</span>{totalPrice}</div>
                </div>
                <div className='discount'>
                    <div>Disocunt</div>
                    <div> 10%</div>
                </div>
                <div className='delivery'>
                    <div>Delivery Charges</div>
                    <div>Free</div>
                </div>
                <div className='totalAmt'>
                    <div>Total Amount</div>
                    <div><span>Rs.</span>{totalPrice}</div>
                </div>
                <div className='placeOrder'>
                    <button className='placeOrderButton'>Place Order</button>
                </div>
            </div>}
        </div>
    )
}
