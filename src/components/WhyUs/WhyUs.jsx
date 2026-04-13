import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './WhyUs.module.css';

const icons = ['📦', '🛡️', '🌱', '🚚'];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function WhyUs() {
  const { t } = useTranslation();
  const items = t('whyUs.items', { returnObjects: true });

  return (
    <section className="section" id="whyus">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="section-title">{t('whyUs.title')}</h2>
          <p className="section-subtitle">{t('whyUs.subtitle')}</p>
        </motion.div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={i + 1}
            >
              <span className={styles.icon}>{icons[i]}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
