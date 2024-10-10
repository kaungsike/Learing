export default function App() {

    const title = 'Product Categories';

    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
      ];


    return (
        <div>
            <p className="mx-2">{title}</p>
            <div>
                {categories.map((category) => <button className="border border-black px-4 py-2 mx-2">{category}</button>)}
            </div>
        </div>
    )

}