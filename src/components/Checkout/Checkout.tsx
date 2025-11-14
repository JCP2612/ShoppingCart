import { useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";
import { usePriceCalculation } from "../../hooks/usePriceCalculation";

export const Checkout = () => {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const { subtotal, shipping, taxes, total } = usePriceCalculation(cart);
    const navigate = useNavigate();

    if (!cart || cart.length === 0) {
        return (
            <div className="max-w-7xl mx-auto py-16 text-center">
                <h2 className="text-2xl font-semibold">Tu carrito está vacío</h2>
            </div>
        );
    }

    return (
        <div className="w-full py-0 px-4 md:px-12 text-left">
            <h1 className="text-3xl font-bold mb-8 text-center pt-6">Checkout</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center gap-6 border-b pb-6">
                                <img
                                    src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                                <div className="flex-1">
                                    <p className="font-medium text-lg">{item.title}</p>
                                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center gap-3 mt-3">
                                        <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-3 py-1 border rounded" aria-label={`Disminuir cantidad de ${item.title}`}>
                                            -
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 border rounded" aria-label={`Aumentar cantidad de ${item.title}`}>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right min-w-max">
                                    <div className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 text-sm mt-2" aria-label={`Eliminar ${item.title} del carrito`}>
                                        Eliminar
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <aside className="p-6 border rounded-lg shadow h-fit lg:sticky lg:top-20">
                    <h2 className="text-lg font-semibold mb-4">Resumen de pago</h2>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Envío:</span><span>${shipping.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Impuestos:</span><span>${taxes.toFixed(2)}</span></div>
                        <div className="flex justify-between font-semibold"><span>Total:</span><span>${total.toFixed(2)}</span></div>
                    </div>
                </aside>
            </div>
            <div className="w-full  flex justify-center mt-8 py-6 border-t">
                <button onClick={() => navigate('/')} className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md">Seguir comprando</button>
            </div>
        </div>
    )
}