"use client";

import styles from "./page.module.css";
import { useCategory } from "./components/CategoryContext";
import Link from "next/link";
import { products } from "./components/products";

export default function Home() {
  const { category } = useCategory();
  const filtered = products.filter((p) => p.category === category);

  return (
    <div className={styles.page}>
      <div className={styles.productGrid}>
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/${product.id}`}
            className={styles.productCard}
          >
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDesc}>{product.description}</p>
            <div className={styles.productPrice}>
              {product.price.toLocaleString()}원
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
