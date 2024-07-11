"use client"

import { notFound } from "next/navigation";

// function getRandomInt(count: number) {
//     return Math.floor(Math.random() * count);
// }

export default function ReviewDetails({
    params, 
}: {
    params: {
        productId: string,
        reviewId: string,
    };
}) {
    // let number = getRandomInt(2);

    // if (number === 1) {
    //     throw new Error("Error loading review");
    // }

    if  (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    )
}