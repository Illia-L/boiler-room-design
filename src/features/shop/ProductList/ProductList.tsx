"use client";

import { products } from "../data/products";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  return (
    <section
      aria-label="Список продуктів"
      style={{
        // display: "grid",
        // gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        // gap: 24,
        display: "flex",
        flexWrap: "wrap",      /* Дозволяє переносити елементи */
  gap: "20",
      }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
