import type { Product } from "../../data/products";
import { useCart } from "../../hooks/useCart";

interface Props {
    product: Product;
    // onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product }: Props) => {
    const { addToCart } = useCart();
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 border hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain rounded-md" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700 font-medium text-lg">${product.price.toFixed(2)}</p>
            {product.stock > 0 ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full w-fit">
                    En stock ({product.stock})
                </span>
            ) : (
                <span className="text-red-500">Agotado</span>
            )}
            <button
                disabled={product.stock === 0}
                onClick={() => addToCart(product)}
                aria-label={`Agregar ${product.title} al carrito`}
                className={`mt-auto px-4 py-2 rounded-lg text-white font-medium transition ${product.stock === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                Agregar al carrito
            </button>
        </div>
    )
}