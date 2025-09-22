"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../../../ui/Button/Button";
import { Heart } from "lucide-react";
import s from "./ProductCard.module.css";

const product = {
  id: "4000",
  title: "Твердопаливний котел + теплоакумулятор",
  price: 2500,
  code: "4000",
  image: "/img/hero-1024.webp",
};

export default function ProductCard() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked((prev) => !prev);

  return (
    <section className={s.card} aria-labelledby="product-title">
      {/* Фото + ❤️ (мобільна кнопка поверх зображення) */}
      <div className={s.media}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
          style={{ objectFit: "cover" }}
          priority
        />

        <Button
          variant="link"
          onClick={toggleLike}
          className={`${s.likeBtn} ${s.likeBtnMobile} ${liked ? s.likeBtnActive : ""}`}
          aria-label="Додати до вподобань"
        >
          <Heart size={20} />
        </Button>
      </div>

      <div className={s.info}>
        <div className={s.row}>
          <h2 id="product-title" className={s.title}>
            {product.title}
          </h2>

          <Button
            variant="link"
            onClick={toggleLike}
            className={`${s.likeBtn} ${s.likeBtnDesktop} ${liked ? s.likeBtnActive : ""}`}
            aria-label="Додати до вподобань"
          >
            <Heart size={20} />
          </Button>
        </div>

        <p className={s.price}>Ціна: {product.price.toLocaleString("uk-UA")} ₴</p>
        <p className={s.code}>Код товару {product.code}</p>
        <p className={s.meta}>Твердопаливний котел циркуляція</p>

        <div className={s.actions}>
          <Button size="xl" className={s.buyBtn}>
            Придбати
          </Button>
        </div>
      </div>
    </section>
  );
}
