import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future: connect to backend
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className={styles.row}>
            <input
              type="text"
              name="name"
              placeholder={t('contact.namePlaceholder')}
              value={form.name}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.emailPlaceholder')}
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <textarea
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            value={form.message}
            onChange={handleChange}
            className={styles.textarea}
            rows={6}
          />
          <button type="submit" className="btn btn-primary">
            {t('contact.send')}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
