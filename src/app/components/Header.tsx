"use client";

import styles from "./Header.module.css";
import CategoryTabs from "./CategoryTabs";
import { useCategory } from "./CategoryContext";

export default function Header() {
  const { category, setCategory } = useCategory();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>예뻐지자</div>
      <CategoryTabs selected={category} onSelect={setCategory} />
      <a
        href="https://open.kakao.com/o/sfke2PCh" // 카카오톡 채널 링크
        target="_blank"
        rel="noopener noreferrer"
        className={styles.kakaoBtn}
      >
        카카오톡으로 문의하기
      </a>
    </header>
  );
}
