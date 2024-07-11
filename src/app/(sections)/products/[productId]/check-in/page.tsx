type Props = {
    params: { 
        productId: string
    }
}

export default function CheckIn({
    params,
} : {
    params : {productId: String}
}) {
    return (
        <div>
            <h1>Check in of product {params.productId}</h1>
        </div>
    )
}