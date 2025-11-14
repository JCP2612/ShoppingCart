import { useMemo } from "react";
import type { CartItem } from "../context/types";

interface PriceCalculation {
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

export const usePriceCalculation = (
  cart: CartItem[],
  taxRate: number = 0.19,
  shippingThreshold: number = 100,
  shippingFee: number = 5
): PriceCalculation => {
  return useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping =
      subtotal === 0 || subtotal > shippingThreshold ? 0 : shippingFee;
    const taxes = subtotal * taxRate;
    const total = subtotal + shipping + taxes;
    return { subtotal, shipping, taxes, total };
  }, [cart, taxRate, shippingThreshold, shippingFee]);
};
