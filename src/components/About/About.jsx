import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.stat1Label'), value: t('about.stat1Value') },
    { label: t('about.stat2Label'), value: t('about.stat2Value') },
    { label: t('about.stat3Label'), value: t('about.stat3Value') },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={1}
          >
            <p className={styles.paragraph}>{t('about.text1')}</p>
            <p className={styles.paragraph}>{t('about.text2')}</p>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                variants={fadeUp}
                custom={i + 2}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
