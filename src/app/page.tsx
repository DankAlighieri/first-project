import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <li className='flex flex-col ml-4'>
                <Link href={"/profile"}>Profile</Link>
                <Link href={"/profile"}>Docs</Link>
                <Link href={"/profile"}>Order-Product</Link>
                <Link href={"/profile"}>Products</Link>
                <Link href={"/profile"}>About</Link>
            </li>  
        </div>
    )
}