import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Products.module.css';

const categoryIcons = {
  cacti: '🌵',
  succulents: '🪴',
  tropical: '🌿',
  flowering: '🌸',
  accessories: '🏺',
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Products() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = t('products.categories', { returnObjects: true });
  const items = t('products.items', { returnObjects: true });

  const filtered =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="section" id="products">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className="section-title">{t('products.title')}</h2>
          <p className="section-subtitle">{t('products.subtitle')}</p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              className={`${styles.filterBtn} ${activeCategory === key ? styles.active : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className={styles.cardImage}>
                  <span className={styles.cardEmoji}>
                    {categoryIcons[item.category] || '🌱'}
                  </span>
                  {item.tag && <span className={styles.tag}>{item.tag}</span>}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{item.name}</h3>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>{item.price}</span>
                    <button className={styles.addBtn}>+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
