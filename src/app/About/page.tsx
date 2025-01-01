// src/app/About/page.tsx
import Navbar from '@/app/componenents/Navbar';
import Footer from '@/app/componenents/footer';
import OurPromise from '@/app/componenents/OurPromise';
import Image from 'next/image';
//import styles from './About.module.css'; // Custom CSS for styling
import styles from "../About.module.css"

export default function About() {
  return (
    <div>
      <Navbar />
    <div className={styles.aboutPage}>
      <header className={styles.header}>
        <h1 className='text-5xl font-bold hover:text-red-500'>About Star Electronic Store</h1>
        <p className='text-balance hover:text-blue-500'>Your one-stop destination for all your electronic needs.</p>
      </header>

      <section className={styles.content}>
        <div className={styles.paragraph}>
          <Image
            src="/abt1.png"
            alt="Star Electronic Storefront"
            width={800}
            height={400}
            className={styles.image}
          />
          </div>
          <div className={styles.paragraph}>
          <h2 className='text-5xl font-bold hover:text-red-500'>Who We Are</h2>
          <p className='text-balance hover:text-blue-500'>
            Star Electronic Store is a leading provider of cutting-edge electronic gadgets, home appliances, and much more. With years of excellence, we take pride in offering our customers the latest technology at unbeatable prices.
          </p>
          <Image
            src="/abt2.png"
            alt="Star Electronic Storefront"
            width={800}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.paragraph}>
          <h2 className='text-5xl font-bold hover:text-red-500'>What We Offer</h2>
          <p className='text-balance hover:text-blue-500'>
            From state-of-the-art laptops, smart TVs, and mobile phones to the latest gadgets and accessories, we cater to all your tech cravings. Our inventory also includes premium home appliances to make your life more comfortable and efficient.
          </p>
          <Image
            src="/abt3.png"
            alt="Wide Range of Products"
            width={800}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.paragraph}>
          <h2 className='text-5xl font-bold hover:text-red-500'>Promotions & Sales</h2>
          <p className='text-balance hover:text-blue-500'>
            We believe in bringing value to our customers with exclusive promotions and seasonal sales. Don’t miss out on our flash deals and bundle offers that ensure you get more for less.
          </p>
          <Image
            src="/abt4.png"
            alt="Exciting Promotions"
            width={800}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.paragraph}>
          <h2 className='text-5xl font-bold hover:text-red-500'>Customer Care</h2>
          <p className='text-balance hover:text-blue-500'>
            At Star Electronic Store, customer satisfaction is our priority. Our dedicated customer care team is available 24/7 to assist you with any queries or issues. Whether you need help choosing the right product or have questions about your order, we’re here to help.
          </p>
          <Image
            src="/abt5.png"
            alt="Dedicated Customer Care"
            width={800}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.paragraph}>
          <h2 className='text-5xl font-bold hover:text-red-500'>Why Choose Us</h2>
          <p className='text-balance hover:text-blue-500'>
            With an unwavering commitment to quality, affordability, and exceptional service, Star Electronic Store is your trusted partner in technology. Shop with us and experience the difference!
          </p>
          <Image
            src="/abt6.png"
            alt="Why Choose Star Electronic Store"
            width={800}
            height={400}
            className={styles.image}
          />
        </div>
      </section>
    </div>
      <OurPromise />
      <Footer />
    </div>
  );
}
