"use client";

import { useParams } from "next/navigation";
import { products } from "../components/products";
import styles from "../page.module.css";
import Link from "next/link";

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className={styles.page}>
        <p>상품을 찾을 수 없습니다.</p>
        <Link href="/">← 목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div
        style={{
          maxWidth: 600,
          margin: "40px auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: 32,
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 14,
            margin: "0 auto 24px auto",
            display: "block",
            border: "1.5px solid #111",
            background: "#faf9f7",
          }}
        />
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
          {product.name}
        </h1>
        <div
          style={{
            color: "#bfa14a",
            fontWeight: 700,
            fontSize: 22,
            marginBottom: 18,
          }}
        >
          {product.price.toLocaleString()}원
        </div>
        <p style={{ fontSize: 17, color: "#444", marginBottom: 24 }}>
          {product.description}
        </p>
        <Link
          href="/"
          style={{ color: "#bfa14a", fontWeight: 500, fontSize: 16 }}
        >
          ← 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
