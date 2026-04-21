import { useState } from "react";
import { Producto } from "../tipos/productos";

export default function useItemsDeCompra() {
  const [productos, setItems] = useState<Producto[]>([]);

  const agregarProducto = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);
  };

  const cambiarProducto = (id: string) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, done: !it.done } : it
      )
    );
  };

  const eliminarProducto = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return {
    productos,
    agregarProducto,
    cambiarProducto,
    eliminarProducto,
  };
}