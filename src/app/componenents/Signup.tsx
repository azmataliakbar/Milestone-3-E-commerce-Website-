// src/app/components/Signup.tsx

import styles from '../Signup.module.css';

export default function Signup() {
  return (
    <div className={styles.container}>
      <section className={styles.signupSection}>
        <div className={styles.textContent}>
          <h1>Join the Star Electronics Family</h1>
          <p>
            Stay informed about our latest product launches, exclusive deals, and
            special promotions. Sign up now to receive updates directly in your inbox!
          </p>
        </div>
        <form className={styles.signupForm}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className={styles.inputField}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className={styles.inputField}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Subscribe Now
          </button>
        </form>
      </section>
    </div>
  );
}
