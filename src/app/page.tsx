import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to Dahye's Next.js App!</h1>
      <p className={styles.description}>
        This is a simple example of a Next.js application.
      </p>

      <p className={styles.footer}>Created with ❤️ by Dahye</p>
    </div>
  );
}
