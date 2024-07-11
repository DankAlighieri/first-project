// This layout replaces the children prop in the root layout, but doesnt affect the layout in itself

export default function ProductDetailsLayout({
    // Children prop correspond to the children id passed in the url
    children
}:{
    children: React.ReactNode
}) {
    if(children?.valueOf)

    return (

        <>
            {/* Children will be the one passed in the url */}
            {children}
            <h2>Features Products</h2>
        </>
    )
}