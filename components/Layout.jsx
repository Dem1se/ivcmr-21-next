import styles from "../styles/Layout.module.css"
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
}