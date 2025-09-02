import React from 'react';
import clsx from 'clsx';
import css from '../Button/Button.module.css';
import Link from 'next/link';

type Variant = 'fill' | 'outline' | 'link';
type Color = 'primary' | 'secondary' | 'accent';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  contrast?: boolean;
  href: string;
}

export const AppLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      variant = 'link',
      color = 'primary',
      size = 'md',
      contrast = false,
      children,
      ...rest
    },
    ref
  ) => {
    const { className, ...nativeRest } = rest;

    return (
      <Link
        href={href}
        ref={ref}
        {...nativeRest}
        data-variant={variant}
        data-color={color}
        data-size={size}
        data-contrast={contrast ? 'high' : undefined}
        className={clsx(css.base, className)}
      >
        {children}
      </Link>
    );
  }
);

AppLink.displayName = 'AppLink';
