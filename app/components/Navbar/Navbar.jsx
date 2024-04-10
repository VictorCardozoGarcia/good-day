"use client";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          router.back();
        }}
        className={styles.button}
      >
        <FaChevronLeft size={"40px"} />
      </button>
    </div>
  );
}
