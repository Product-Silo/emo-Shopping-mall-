import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoSection}>
        <div className={styles.brand}>예뻐지자</div>
        <div className={styles.info}>
          <span>사업자: 예뻐지자</span>
          <span>대표: 김다혜</span>
          <span>사업자등록번호: 123-45-67890</span>
          <span>주소: 서울특별시 강남구 샤넬로 5길 12</span>
        </div>
        <div className={styles.contact}>
          고객센터: <a href="tel:070-1234-5678">070-1234-5678</a>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 예뻐지자. All rights reserved.
      </div>
    </footer>
  );
}
