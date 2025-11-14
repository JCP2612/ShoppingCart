import type { Product } from "../data/products";

export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (p: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, q: number) => void;
    clearCart: () => void;
    totalItems: number;
}
