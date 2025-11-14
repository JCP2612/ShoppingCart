import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleContinueShopping = () => {
        if (location.pathname === '/checkout') {
            const confirm = window.confirm("Estás en checkout. ¿Deseas volver al Home?");
            if (!confirm) return;
        }
        onClose();
        navigate('/');
    }
    return (
        <>
            {isOpen && (
                <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" />
            )}

            <aside className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6 transition-transform flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                    <h2 className="text-xl font-bold">Tu carrito</h2>
                    <button className="text-gray-600 hover:text-black" onClick={onClose}>X</button>
                </div>
                <div className="flex-1 overflow-y-auto pr-2">
                    {cart.length === 0 ? (
                        <>
                            <p className="text-gray-500 text-center mt-20">Tu carrito está vacío</p>
                            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded" onClick={handleContinueShopping} aria-label="Ver productos">Ver productos</button>
                        </>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded" />
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-gray-600">${item.price}</p>
                                        <div className="flex items-center mt-2 gap-2">
                                            <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 border rounded" aria-label={`Disminuir cantidad de ${item.title}`}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 border rounded" aria-label={`Aumentar cantidad de ${item.title}`}>+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500" aria-label={`Eliminar ${item.title} del carrito`}>Eliminar</button>
                                </div>

                            ))}
                        </div>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="pt-4 mt-4 border-t flex-shrink-0">
                        <button onClick={() => { navigate('/checkout'); onClose(); }} className="w-full block text-center bg-green-500 text-white py-2 rounded" aria-label="Ir a pagar">
                            Ir a pagar
                        </button>
                    </div>
                )}
            </aside>
        </>
    )
}