import Image from 'next/image';
import type { Product } from '../types';
import Button from '../../ui/Button/Button';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import css from './ProductCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
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
            //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={css.imageCard}
          />
        </div>
        <button
          className={css.like}
          type='button'
          onClick={() => {
            // hovered ? setHovered(false) : setHovered(true);
          }}
          //  onMouseEnter={() => hovered == true ? setHovered(true):setHovered(false)}
          //  onMouseLeave={() => hovered == false ? setHovered(true):setHovered(false)}
          //  onMouseEnter={() => setHovered(true)}
          //  onMouseLeave={() => setHovered(false)}
        >
          {hovered ? (
            <svg
              width='28'
              height='24'
              viewBox='0 0 28 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.21616 2.2491C2.91837 1.54928 3.75207 0.994138 4.66965 0.615385C5.58723 0.236632 6.57071 0.0416878 7.56391 0.0416878C8.55712 0.0416878 9.54059 0.236632 10.4582 0.615385C11.3757 0.994138 12.2095 1.54928 12.9117 2.2491C13.1869 2.52435 13.5433 2.86691 13.9809 3.27677C14.4165 2.86691 14.7729 2.52385 15.0502 2.2476C16.4574 0.823886 18.3747 0.0154797 20.3802 0.000219997C22.3858 -0.0150397 24.3152 0.764097 25.7441 2.16623C27.1731 3.56836 27.9845 5.47863 27.9998 7.47681C28.0151 9.47498 27.2331 11.3974 25.8258 12.8211L15.0502 23.5588C14.7665 23.8413 14.3819 24 13.9809 24C13.5799 24 13.1953 23.8413 12.9117 23.5588L2.13298 12.8196C0.750732 11.3992 -0.0153307 9.49418 0.00023258 7.51585C0.0157959 5.53752 0.811736 3.64467 2.21616 2.24609V2.2491Z'
                fill='#F64E60'
              />
            </svg>
          ) : (
            <Heart />
          )}
        </button>
      </div>

      {/* Назва */}
      <h3
        id={`product-${product.id}-title`}
        className={css.title}
      >
        {product.title}
      </h3>
      <div className={css.articlePrice}>
        {/* Ціна */}
        <p className={css.priceCard}>
          {product.price.toLocaleString('uk-UA')} ₴
        </p>
        {/* Код товару */}
        <p className={css.articleCard}>
          Код товару <p> {product.code}</p>
        </p>
      </div>
      {/* Кнопки */}
      <div>
        <Button
          className={css.addToCard}
          type='button'
        >
          Додати у кошик
        </Button>
      </div>
    </article>
  );
}
