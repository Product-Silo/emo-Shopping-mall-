import styles from "./CategoryTabs.module.css";

interface Props {
  selected: "bracelet" | "necklace";
  onSelect: (category: "bracelet" | "necklace") => void;
}

export default function CategoryTabs({ selected, onSelect }: Props) {
  return (
    <nav className={styles.tabs}>
      <button
        className={selected === "bracelet" ? styles.active : ""}
        onClick={() => onSelect("bracelet")}
        type="button"
      >
        팔찌
      </button>
      <button
        className={selected === "necklace" ? styles.active : ""}
        onClick={() => onSelect("necklace")}
        type="button"
      >
        목걸이
      </button>
    </nav>
  );
}
