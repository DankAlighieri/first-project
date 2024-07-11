"use client";

import { notFound, useRouter  } from "next/navigation";
import { useState } from "react";

type Props = {
    params: { 
        productId: string
    }
}

// export async function generateMetadata(
//     { params } : Props
// ): Promise<Metadata> {
//     const title = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`iPhone ${params.productId}`)
//         }, 100)
//     })
//     return {
//         title: `Product ${title}`
//     }
// }


export default function ProductDetails( { 
    params, 
}: {
    params: { productId: string }; 
}) {
    const router = useRouter();

    function handleClick(url: string) {
        url === "reviews" ? 
            router.push(`/products/${params.productId}/${url}/${params.productId}`) :
            router.push(`/products/${params.productId}/${url}/`)

    } 
    

    if(parseInt(params.productId) > 100) { 
        return notFound()
        // How to not pass the standard products layout?
    }
    return (
        <div>
            <h1>Details about product {params.productId}</h1>
            <button 
            onClick={() => handleClick("check-in")}>
                CheckIn
            </button>
            <button 
            className="ml-3" 
            onClick={() => handleClick("reviews")}>
                Review
            </button>
        </div>
        
    )
}