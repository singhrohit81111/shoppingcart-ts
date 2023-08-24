import style1 from './style.module.css';


export default function NoData({ dataLength }: any) {
    return (
        <div>
            {dataLength === 0 && <div className={style1.mm}>Add items in the cart</div>}
        </div>
    )
}
