"use client";

import Image from "next/image";
import { products } from "../data/products";
import type { Product } from "../types";
import Button from "../../ui/Button/Button";

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      aria-labelledby={`product-${product.id}-title`}
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        background: "#fff",
      }}
    >
      {/* Картинка */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover", borderRadius: 8 }}
        />
      </div>

      {/* Назва */}
      <h3
        id={`product-${product.id}-title`}
        style={{ fontSize: 16, fontWeight: 600, margin: "8px 0 0" }}
      >
        {product.title}
      </h3>

      {/* Код товару */}
      <p style={{ fontSize: 14, color: "#666", margin: 0 }}>
        Код товару: {product.code}
      </p>

      {/* Ціна */}
      <p style={{ fontSize: 16, fontWeight: 500, margin: "4px 0" }}>
        {product.price.toLocaleString("uk-UA")} ₴
      </p>

      {/* Кнопки */}
      <div style={{ marginTop: "auto" }}>
        <Button type="button">Додати у кошик</Button>
      </div>
    </article>
  );
}

export default function ProductList() {
  return (
    <section
      aria-label="Список продуктів"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24,
      }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}