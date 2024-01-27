import Image from "next/image";
import styles from "./page.module.css";
import profilePic from '@/images/profile-pic.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Image
              src={profilePic}
              alt="Profile Picture"
              className={styles.profilePic}
              width={88}
              height={88}
              priority
          />

          <div className={styles.cardDetails}>
            <h1 className={styles.name}>Jessica Randall</h1>
            <h2 className={styles.address}>London, United Kingdom</h2>
          </div>

          <p className={styles.description}>"Front-end developer and avid reader."</p>

          <div className={styles.socialLinks}>
            <Link href={'#'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">Github</Link>
            <Link href={'#'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">Frontend Mentor</Link>
            <Link href={'#'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">LinedIn</Link>
            <Link href={'#'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">Twitter</Link>
            <Link href={'#'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">Instagram</Link>
          </div>
      </div>
    </main>
  );
}
