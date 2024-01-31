import Image from "next/image";
import styles from "./page.module.css";
import profilePic from '@/images/profile-pic.png'
import Link from "next/link";

export default function Home() {
  return (
    <>
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
              <h1 className={styles.name}>Hakeem Clarke</h1>
              <h2 className={styles.address}>Kingston, Jamaica</h2>
            </div>

            <p className={styles.description}>JavaScript Developer and Designer</p>

            <div className={styles.socialLinks}>
              <Link href={'https://github.com/hakeem-jc'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">GitHub</Link>
              <Link href={'https://www.frontendmentor.io/profile/hakeem-jc'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">Frontend Mentor</Link>
              <Link href={'https://www.linkedin.com/in/hakeemclarke/'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              <Link href={'https://dribbble.com/HakeemC'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">Dribbble</Link>
              <Link href={'https://www.instagram.com/hakeem_jc/'} className={styles.socialButton} target="_blank" rel="noopener noreferrer">Instagram</Link>
            </div>
        </div>
      </main>

      <footer className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </p>
        <p>Coded by <a href="https://www.frontendmentor.io/profile/hakeem-jc">Hakeem Clarke</a>.</p>
      </footer>
    </>
  );
}
