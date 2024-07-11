import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <li className='flex flex-col ml-4'>
                <Link href={"/profile"}>Profile</Link>
                <Link href={"/docs"}>Docs</Link>
                <Link href={"/order-product"}>Order-Product</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/about"}>About</Link>
            </li>  
        </div>
    )
}