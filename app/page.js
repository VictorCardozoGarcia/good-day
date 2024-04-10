import styles from "./page.module.css";
import Link from "next/link";
import Calendar from "./components/Calendar/Calendar";

export default function Home() {
  return (
    <main>
      <Link href="/profile" className={styles.userProfileButton}>
        Perfil de Usuário
      </Link>
      <Calendar />
      <Link href="/message" className={styles.dailyMessageButton}>
        Mensagem Diária
      </Link>
    </main>
  );
}
