import { ProductList } from "../components/ProductList/ProductList";

export const Home = () => {
    return (
        <div className="max-w-6xl mx-auto pt-10">
            <h1 className="text-3xl font-bold mb-6">Productos</h1>
            <ProductList />
        </div>
    )
}