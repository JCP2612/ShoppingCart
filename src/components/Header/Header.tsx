import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../hooks/useCart";

interface HeaderProps {
    onOpenCart: () => void;
    cartCount: number;
}

export const Header = ({ onOpenCart }: HeaderProps) => {

    const { totalItems } = useCart();
    return (
        <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-10">

            <h1 className="text-xl font-bold tracking-tight text-gray-800">Mi Tienda</h1>

            <button onClick={onOpenCart} className="relative p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Abrir carrito de compras">
                <ShoppingCartIcon className="h-6 w-6 text-gray-800" />
                {totalItems > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                        {totalItems}
                    </span>
                )}
            </button>
        </header>
    )
}