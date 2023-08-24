export default function NoData({ dataLength }: any) {
    return (
        <div>
            {dataLength === 0 && <div className='mm'>Add items in the cart</div>}
        </div>
    )
}
