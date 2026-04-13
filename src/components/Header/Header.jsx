import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Header.module.css';

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'catalog', href: '#products' },
    { key: 'whyUs', href: '#whyus' },
    { key: 'reviews', href: '#reviews' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          Vels<span className={styles.logoAccent}>.</span>
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className={styles.navLink}>
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <a href="#products" className="btn btn-primary">
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
