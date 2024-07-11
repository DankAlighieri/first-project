// This layout replaces the children prop in the root layout, but doesnt affect the layout in itself

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    // Children prop correspond to the children id passed in the url
    children
}:{
    children: React.ReactNode
}) {
    
    let number = getRandomInt(2);

    if (number === 1) {
        throw new Error("Error loading review");
    }

    return (

        <>
            {/* Children will be the one passed in the url */}
            {children}
            <h2>Features Products</h2>
        </>
    )
}