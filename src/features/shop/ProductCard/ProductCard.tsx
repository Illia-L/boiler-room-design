import Image from "next/image";
import type { Product } from "../types";
import Button from "../../ui/Button/Button";
import { Heart } from "lucide-react";

import css from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      aria-labelledby={`product-${product.id}-title`}
      className={css.productCard}
    >
      {/* Картинка */}
      <div className={css.imageBlock}>
        <div>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className={css.imageCard}
          />
        </div>
        <Button variant="link" className={css.like}>
          <Heart color="#202020" />
        </Button>
      </div>

      {/* Назва */}
      <h3 id={`product-${product.id}-title`} className={css.title}>
        {product.title}
      </h3>
      <div className={css.articlePrice}>
        {/* Ціна */}
        <p className={css.priceCard}>
          {product.price.toLocaleString("uk-UA")} ₴
        </p>
        {/* Код товару */}
        <p className={css.articleCard}>
          Код товару <p> {product.code}</p>
        </p>
      </div>
      {/* Кнопки */}
      <div>
        <Button className={css.addToCard} type="button">
          Додати у кошик
        </Button>
      </div>
    </article>
  );
}
