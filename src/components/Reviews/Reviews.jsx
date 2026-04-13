import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Reviews.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Reviews() {
  const { t } = useTranslation();
  const items = t('reviews.items', { returnObjects: true });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="section" id="reviews">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className="section-title">{t('reviews.title')}</h2>
          <p className="section-subtitle">{t('reviews.subtitle')}</p>
        </motion.div>

        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={prev}>
            &#8592;
          </button>

          <div className={styles.cardWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className={styles.card}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.stars}>
                  {Array.from({ length: items[current].rating }).map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p className={styles.text}>"{items[current].text}"</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {items[current].name.charAt(0)}
                  </div>
                  <span className={styles.name}>{items[current].name}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.arrow} onClick={next}>
            &#8594;
          </button>
        </div>

        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
