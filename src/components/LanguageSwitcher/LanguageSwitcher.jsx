import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggle = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.lang} ${currentLang === 'en' ? styles.active : ''}`}
        onClick={() => toggle('en')}
      >
        EN
      </button>
      <span className={styles.divider}>/</span>
      <button
        className={`${styles.lang} ${currentLang === 'ru' ? styles.active : ''}`}
        onClick={() => toggle('ru')}
      >
        RU
      </button>
    </div>
  );
}
