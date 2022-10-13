import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Product } from "../lib/products";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='border my-4 w-80 shadow hover:shadow-xl'>
      <Link href={`/products/${product.id}`}>
        <a>
          <Image src={product.pictureUrl} alt='' width='320' height='240' />
          <div className='p-2 flex justify-between items-baseline'>
            <h2 className='text-lg font-bold'>{product.title}</h2>
            <span>{product.price}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
